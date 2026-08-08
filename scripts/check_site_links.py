#!/usr/bin/env python3
"""Verifica referências locais no HTML gerado pelo Jekyll."""

import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class ReferenceParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.references = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        for name in ("href", "src"):
            if attributes.get(name):
                self.references.append(attributes[name])


def candidates_for(path):
    if path.is_dir():
        return [path / "index.html"]
    if path.suffix:
        return [path]
    return [path, path.with_suffix(".html"), path / "index.html"]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("site", type=Path)
    parser.add_argument("--baseurl", default="")
    args = parser.parse_args()

    site = args.site.resolve()
    baseurl = "/" + args.baseurl.strip("/") if args.baseurl else ""
    failures = []

    for html_file in site.rglob("*.html"):
        reference_parser = ReferenceParser()
        reference_parser.feed(html_file.read_text(encoding="utf-8"))

        for reference in reference_parser.references:
            parsed = urlsplit(reference)
            if parsed.scheme or parsed.netloc or reference.startswith(("#", "mailto:", "tel:", "data:")):
                continue

            path_text = unquote(parsed.path)
            if not path_text:
                continue

            if path_text.startswith("/"):
                if baseurl and (path_text == baseurl or path_text.startswith(baseurl + "/")):
                    path_text = path_text[len(baseurl):] or "/"
                target = site / path_text.lstrip("/")
            else:
                target = html_file.parent / path_text

            if not any(candidate.exists() for candidate in candidates_for(target)):
                failures.append(f"{html_file.relative_to(site)} -> {reference}")

    if failures:
        print("Referências locais quebradas:")
        print("\n".join(f"- {failure}" for failure in failures))
        raise SystemExit(1)

    print("Referências locais: OK")


if __name__ == "__main__":
    main()
