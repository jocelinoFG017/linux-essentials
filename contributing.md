# 🤝 Como contribuir

Contribuições de conteúdo e código são bem-vindas. O projeto busca oferecer material claro, correto e acessível para estudantes de Linux Essentials.

## Fluxo recomendado

1. Faça um fork do repositório.
2. Crie uma branch descritiva: `git switch -c correcao/topico-2`.
3. Faça alterações pequenas e focadas.
4. Execute as validações relacionadas.
5. Envie os commits ao seu fork e abra um pull request.

No pull request, explique o problema, a solução e como a alteração foi testada.

## Contribuições de conteúdo

- Use português claro e revise ortografia e gramática.
- Explique o motivo e o efeito dos comandos apresentados.
- Não copie material protegido por direitos autorais.
- Evite comandos destrutivos sem uma advertência visível e um ambiente seguro de exemplo.
- Mantenha links internos compatíveis com o `baseurl` do Jekyll.
- Inclua front matter em toda página publicada:

```yaml
---
layout: default
title: Título da página
---
```

## Validação do site

```sh
bundle install
bundle exec jekyll build --strict_front_matter
python3 scripts/check_site_links.py _site --baseurl /linux-essentials
```

Confira também a página em uma largura de celular e nos temas claro, escuro e leitura.

## Validação do quiz

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements-dev.txt
cd 06-question-project
python -m pytest
```

Para scripts Shell, execute `bash -n caminho/do/script.sh` antes de enviar.

## Relatos de segurança

Não publique tokens, dados pessoais ou detalhes exploráveis em uma issue. Siga o processo privado descrito em [security.md](security.md).
