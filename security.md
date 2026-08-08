# 🔐 Política de segurança

## Versões suportadas

Apenas a versão mais recente do branch `main` recebe correções.

## Como relatar uma vulnerabilidade

Não abra uma issue pública contendo credenciais, dados pessoais, passos de exploração ou outra informação sensível.

Use a aba **Security** do repositório e selecione **Report a vulnerability** para criar um relatório privado:

https://github.com/jocelinoFG017/linux-essentials/security/advisories/new

Inclua, quando possível:

- arquivo, página ou funcionalidade afetada;
- passos mínimos para reproduzir o problema;
- impacto esperado;
- sugestão de correção;
- indicação de qualquer dado que já tenha sido exposto.

Se o recurso de relato privado estiver indisponível, abra uma issue apenas para solicitar um canal de contato, sem revelar detalhes da vulnerabilidade.

## Escopo

São considerados relevantes:

- credenciais ou informações sensíveis presentes no repositório;
- exemplos que possam apagar dados ou comprometer um sistema sem aviso adequado;
- vulnerabilidades na aplicação Flask do quiz;
- dependências ou fluxos de publicação comprometidos;
- injeção de conteúdo ou scripts nas páginas publicadas.

O quiz foi desenvolvido para estudo e execução local. Ele não deve ser exposto diretamente à internet sem autenticação, proteção CSRF, limites de requisição e configuração apropriada de produção.

## Divulgação responsável

O responsável pelo projeto analisará o relatório, confirmará o impacto e coordenará a correção antes da divulgação pública. Não há garantia de prazo, mas relatórios claros e reproduzíveis terão prioridade.
