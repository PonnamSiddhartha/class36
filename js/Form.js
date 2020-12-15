class Form{
     constructor(){}

     display(){
         var title=createElement('h2')
         title.html("Car Racing Game");
         title.position(130,0);
        
         var input = createElement("name");
         var button = createButton("Play");
         input.position(150,150);
         button.position(250,250)
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name)
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html("hello"+ name);
            greeting.position(130,160);


        })
    

    
    
        }


    
}