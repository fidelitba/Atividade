//criar variáveis
var cat, catImg;
var invisivel



//função que carrega imagens
function preload (){
    //carregar imagens
    catImg = loadImage("happy.png");
}


//função que inicializa o arquivo
function setup (){

    //cria tamanho do fundo da tela
    createCanvas(700,800);
    
    //criar sprites
    cat = createSprite(300,500,10,10);

    //carregar imagem
    cat.addImage(catImg);
    
    //colocar tamanho
    cat.scale = 0.5
    invisivel = createSprite(90,700,200,10);
    invisivel.visible = false;

}


//função que executa o programa até que seja parado
function draw (){

    //colocar cor de fundo
    background("#82D0E8");




    //condição para pular
    if(keyDown("space")){
        cat.velocityY = -10;
    }
    cat.velocityY = cat.velocityY+0.9; 
    cat.collide(invisivel)
    //exibir texto de instrução
    fill("black");
    text("Pressione espaço para pula",250,350);
    

    
    //comando que desenha sprites

    drawSprites();
}
