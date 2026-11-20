# Portfólio — Leandro Alves Santos (@leandro.sants)

Primeira versão de um site pessoal responsivo para divulgar projetos e serviços de desenvolvimento web. Feito com **HTML + CSS + JavaScript puros**, sem ferramentas de compilação. Inclui imagens reais retiradas de um vídeo do projeto ForceTrack enviado pelo autor e um vídeo demonstrativo de teste com Arduino.

## Como abrir

1. Extraia o ZIP inteiro para uma pasta.
2. Abra a pasta no Visual Studio Code.
3. Abra `index.html` no Chrome ou Edge. Se preferir, use a extensão Live Server no VS Code.
4. Navegue pelo site e clique em **Explorar o projeto** para ver a galeria e o vídeo do ForceTrack.

## Estrutura

- `index.html` — textos, páginas/seções, links, galeria e informações pessoais.
- `style.css` — identidade visual, cores, fontes, desktop e celular.
- `script.js` — menu mobile, galeria do projeto, modal, animações e botão de copiar Instagram.
- `assets/` — imagens **reais do ForceTrack** e vídeo do teste USB.

## Ajustes importantes antes de publicar

1. **Confirme seu @ do Instagram:** o link no bloco de contato é `https://www.instagram.com/leandro.sants/` e foi escolhido como intenção de marca, mas a disponibilidade da conta não foi verificada. Ajuste a URL e o texto do botão se necessário.
2. **Adicione seu LinkedIn:** quando souber a URL exata, crie um novo botão na seção `#contato` apontando para sua página oficial. Não coloque um link fictício.
3. **Revise seus dados acadêmicos:** confirme como deseja descrever sua formação, competências e participação no ForceTrack.
4. **Verifique direitos de imagens e vídeos** do projeto antes de divulgar publicamente, incluindo imagens de tratores usadas na página original.
5. **Demonstração por USB:** o vídeo mostra leituras *simuladas* por potenciômetro recebidas no navegador por Web Serial API. A integração final HTTP via Wi-Fi e as medições com célula de carga não são apresentadas como resultados já validados.
6. **Imagem pessoal (opcional):** por enquanto o site usa o monograma LS. Você pode incluir uma foto sua depois.
7. **Sem formulário que armazene dados:** contato é um link para Instagram e botão de copiar o @. Assim, não há coleta de informações pessoais por servidor.

## Como mudar cores

No topo de `style.css`, altere as variáveis `--bg`, `--mint`, `--mint-bright` e outras definidas em `:root`.

## Como adicionar outro projeto

Duplique o bloco `<article class="project-card">...</article>` em `index.html`, troque nome, descrição e imagem. O botão de modal atual abre somente detalhes do ForceTrack; para um novo modal, adicione um `dialog` e conecte os botões no `script.js`.

## Publicação

É um site **estático** (não usa o banco de dados do ForceTrack). Pode ser publicado em um serviço de hospedagem estática que aceite portfólios pessoais. Envie todos os arquivos mantendo a pasta `assets/` intacta. Teste os links, o vídeo e a responsividade depois da publicação.

## Crédito do projeto

Portfólio pessoal de Leandro Alves Santos. ForceTrack: Leandro desenvolveu a aplicação web e a integração de recepção de dados, com auxílio de ferramentas de IA; a parte Arduino foi desenvolvida por colega. O vídeo de teste demonstra a comunicação via USB com leituras simuladas. Ajuste a seção de créditos conforme combinado entre os participantes do TCC.
