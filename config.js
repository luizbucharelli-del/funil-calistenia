/* Substitua os arquivos de assets/ mantendo os nomes, ou altere os caminhos abaixo. */
window.QUIZ_CONFIG = {
  salesUrl: 'vendas/index.html',
  carouselInterval: 5000,
  processingDuration: 6600,
  images: {
    age: ['idade-18-29','idade-30-39','idade-40-49','idade-50-mais'],
    goal: ['objetivo-perder-peso','objetivo-ganhar-musculo','objetivo-recomposicao','objetivo-condicionamento'],
    body: ['corpo-delgado','corpo-atletico','corpo-marcado','corpo-forte'],
    areas: ['area-peitorais','area-bracos','area-abdomen','area-pernas']
  },
  // Nomes e idades ilustrativos para revisão. Descrições do vídeo de referência.
  results: [
    {name:'CARLOS ANDRÉS',age:25,title:'DE CUERPO COMÚN A MÁQUINA DE GUERRA',text:'Este protocolo activó el modo anabólico natural de su cuerpo. 21 Días sin gimnasio.'},
    {name:'JUAN SEBASTIÁN',age:28,title:'DE ESTANCADO A ELITE',text:'Pensé que mi genética era el problema. El Protocolo me demostró lo contrario.'},
    {name:'ANDRÉS FELIPE',age:32,title:'RECUPERACIÓN TOTAL',text:'La disciplina y el método correcto cambiaron mi vida en tiempo récord.'},
    {name:'JUAN DAVID',age:26,title:'FUERZA OPERATIVA',text:'Nunca creí que a mi edad podría lograr este nivel de definición.'},
    {name:'DIEGO ALEJANDRO',age:30,title:'DE CUERPO COMÚN A MÁQUINA DE GUERRA',text:'Este protocolo activó el modo anabólico natural de su cuerpo. 21 Días sin gimnasio.'},
    {name:'LUIS FERNANDO',age:40,title:'RECUPERACIÓN TOTAL',text:'La disciplina y el método correcto cambiaron mi vida en tiempo récord.'},
    {name:'MIGUEL ÁNGEL',age:29,title:'DE ESTANCADO A ELITE',text:'Pensé que mi genética era el problema. El Protocolo me demostró lo contrario.'},
    {name:'SANTIAGO',age:27,title:'FUERZA OPERATIVA',text:'Nunca creí que a mi edad podría lograr este nivel de definición.'}
  ].map((r,i)=>({...r,
    id:'resultados/'+String(i+1).padStart(2,'0'),
    illustrative:true,
    zoom:({1:1.04,4:1.04,7:1.05,8:1.29})[i+1]||1
  }))
};
