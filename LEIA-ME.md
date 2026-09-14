# Funil de Calistenia Militar

Versão funcional em HTML, CSS e JavaScript básicos. Sem instalação de dependências. Abra index.html para começar. O fluxo termina na página de vendas já montada, em vendas/index.html.

## O que foi reproduzido

Base: vídeo Video.mp4, 116,22 segundos, 384 × 832 pixels.

| Etapa | Referência aproximada | Comportamento |
|---|---|---|
| Idade | 0–8 s | Quatro cartões; clique avança |
| Pergunta 02: objetivo principal | 8–11 s | Quatro cartões; clique avança |
| Pergunta 03: objetivo corporal | 11–17 s | Quatro cartões; clique avança |
| Pergunta 04: áreas | 17–29 s | Múltipla seleção; continuar habilita após escolher |
| Resultados | 29–53 s | Carrossel com oito montagens completas, troca a cada 5 s |
| Pergunta 07: altura | 53–59 s | Régua arrastável, padrão 175 cm |
| Pergunta 08: peso | 59–64 s | Régua arrastável, padrão 75 kg |
| Pergunta 09: meta | 64–66 s | Régua arrastável, padrão 70 kg |
| Processamento | 66–73 s | Quatro etapas, barra progressiva, aproximadamente 6,6 s |
| Aprovação | 73–81 s | Relatório e acesso à página de vendas |
| Vendas | 81–116 s | Página longa com rolagem, imagens e FAQ |

A gravação não exibe as perguntas 05 e 06. A implementação preserva o salto de numeração que aparece no caminho gravado. Outros caminhos condicionais não demonstrados no vídeo não foram inferidos.

## Ajustes para celular

- Altura da tela baseada na área disponível do navegador (svh), com espaço para as áreas seguras do aparelho.
- Títulos, imagens, intervalos e botões menores em telas baixas.
- Todas as opções das perguntas e os botões visíveis sem rolagem nos tamanhos testados.
- Em telas excepcionalmente baixas, orientação horizontal ou ampliação de acessibilidade, a rolagem continua disponível para não cortar o conteúdo.
- A página de vendas conserva sua rolagem natural.
- Transições de entrada/saída, realce de seleção, carrossel, réguas e processamento implementados em CSS/JS.
- O número percentual do processamento acompanha a barra; no vídeo o rótulo aparece em 100% antes de a barra terminar.
- Tipografia aproximada com fontes locais. As 16 imagens das perguntas foram substituídas pelos arquivos enviados. O carrossel e a galeria de vendas compartilham as mesmas oito montagens completas de antes e depois, em assets/resultados/.

## Trocar imagens

Veja IMAGENS.md. Mantenha os nomes e substitua os arquivos em assets/. As fotos de resultados ficam em assets/resultados/01.webp até 08.webp e são usadas tanto no quiz quanto na página de vendas. Os caminhos das perguntas, dados do carrossel e tempos podem ser alterados em config.js.

## Pagamento

O checkout ainda não foi fornecido. Preencha CHECKOUT_URL em vendas/index.html. Enquanto estiver vazio, os botões de compra levam à oferta da própria página.

O questionário guarda as escolhas apenas na sessão do navegador; não envia respostas a um servidor. O processamento é uma sequência visual de apresentação, não uma análise médica ou geração real de plano.

## Publicar na Vercel

Envie o conteúdo desta pasta à raiz do repositório GitHub (não envie apenas o ZIP). Importe o repositório na Vercel, selecione Framework Preset: Other e mantenha a raiz como diretório do projeto. O vercel.json já define publicação estática sem comando de build.

## Verificação

Fluxo completo testado: seleção simples, seleção múltipla, voltar preservando escolhas, navegação do carrossel, réguas por arraste e teclado, processamento e chegada à página de vendas. Cinquenta combinações de etapa/tela verificadas em 320×568, 375×667, 390×664, 430×780 e 1440×900, sem imagens ausentes, rolagem involuntária ou botões fora da tela. Esses testes são em navegador desktop emulando tamanhos móveis, não testes em todos os modelos de celular.

## Ajustes visuais atuais

Metadados com fonte mais encorpada; botões CONTINUAR habilitados com neon pulsante suave e respeito à preferência de reduzir movimento. Carrossel com oito perfis de exemplo (nome, idade, título e descrição), editáveis em config.js. Descrições baseadas nos quatro textos apresentados no vídeo original.

Cartões das perguntas com proporções limitadas e preenchimento por object-fit: cover, sem nova compressão dos arquivos. Página de vendas com animações de entrada na rolagem usando IntersectionObserver; respeita reduzir movimento e mantém o conteúdo visível sem suporte à API.
