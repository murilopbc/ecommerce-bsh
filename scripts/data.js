// lista de produtos

const catalogo = [{
    codigoProduto: 1,
    nomeProduto: "Serra Mármore Bosch GDC 150 Titan 1500W",
    descriçãoProduto:"A Serra Mármore a seco Bosch GDC 150 TITAN, é a única ferramenta do mercado que alcança espaços que as outras não alcançam, além de ser leve e compacta, possui placa-base de fácil ajuste e remoção, alto torque e maior velocidade nas diversas aplicações. A única ferramenta do mercado que alcança espaços que as outras não alcançam, além de ser leve e compacta.",
    precoProduto: 400.00,
    imagemProduto: "./imagem/produtos/produto1.png"

},

{
    codigoProduto: 2,
    nomeProduto: "Detector Material Bosch D-TECT 200 C",
    descriçãoProduto:"O scanner de parede Bosch D-TECT 200C é um detector de metais, fios energizados, madeiramento e tubulações em paredes. Acompanha: 4 pilhas AA, 1 Bolsa de proteção, 1 certificado do fabricante, manual, 1 cabo USB-C. Garantia 2 anos Bosch.",
    precoProduto: 4289.00,
    imagemProduto: "./imagem/produtos/produto2.png"
},

{
    codigoProduto: 3,
    nomeProduto: "Martelo Demolidor Bosch GSH 27VC encaixe Hexagonal 28mm 2000W - 220V",
    descriçãoProduto:"O Martelo Demolidor Bosch GSH 27VC é o mais potente da Bosch, com 62 joules de energia de impacto e 1000 impactos por minuto. Oferece baixo nível de vibração (8,5 m/s²) para uso prolongado, durabilidade com componentes de alta qualidade e empunhadeiras ergonômicas com Softgrip. Ideal para demolir paredes, vigas, pisos e mais.",
    precoProduto: 10599.00,
    imagemProduto: "./imagem/produtos/produto3.png"
},

{
    codigoProduto: 4,
    nomeProduto: "GSB 18V-50 Professional",
    descriçãoProduto:"A Parafusadeira e Furadeira de Impacto de Bosch gsb 18V 50, 18V, vem com 2 Baterias com amperagem de 2,0Ah e 1 Carregador Rápido bivolt. Possui motor sem escovas de carvão com o dobro de vida útil e maior autonomia! É o melhor custo-benefício do mercado no segmento 18V sem escovas de carvão! Ferramenta 100% Compatível com Baterias e Carregadores 18V Bosch.", 
    precoProduto: 1000.00,
    imagemProduto: "./imagem/produtos/produto4.png"
},

{
    codigoProduto: 5,
    nomeProduto: "Nível Laser Verde Bosch GLL 2-20 G 10m Linhas Cruzadas com Tripé Peça",
    descriçãoProduto:"Nível laser verde com linha horizontal 360° para marcações precisas em ambientes internos.Oferece nivelamento horizontal e vertical, esquadro frontal de 90º e proteção contra poeira e respingos d'água (IP 64). Inclui tripé BT 150 e possui autonivelamento para facilitar instalações perfeitas.",
    precoProduto: 1800.00,
    imagemProduto: "./imagem/produtos/produto5.png"
},

{
    codigoProduto: 6,
    nomeProduto: "Lixadeira angular Bosch GWS 22 U 2200W 220V",
    descriçãoProduto:"A Lixadeira Angular Bosch GWS 22 U é uma poderosa ferramenta de 2200 Watts, ideal para lixamento em diversos materiais, com prato de apoio de 7. Possui interruptor tri-control para segurança e é indicada para uso industrial e aplicações intensas.",
    precoProduto: 1118.88,
    imagemProduto: "./imagem/produtos/produto6.webp"
},

]

function mostrarProdutos(){
    let produto = catalogo[3]
    let cardProduto = `<div class="produtos">
    <a href="produto1.html">
        '<img class="produto_imagem" src="imagem/produtos/produto1.png" alt="serra circular">
    </a></div>"`
    console.log('O produto de código ${produto.codigoProduto} custa R$ $(produto.precoProduto)')
    let gridProduto = document.querySelector(".produto_grid")
    gridProduto.innerHTML = cardProduto
}

mostrarProdutos()