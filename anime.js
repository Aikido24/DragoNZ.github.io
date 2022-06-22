const pageHeight = document.body.scrollHeight;//document.documentElement.scrollHeight;
window.onload = function(){
    window.addEventListener("scroll", (e)=>{
        console.log(window.scrollY);
        //console.log(screen.width);
        //console.log(elHeight);
    });

    lax.init();
    lax.addDriver("scrollY", function(){
        return window.scrollY;
    });

    lax.addElements('.gokuNube',{
        scrollY:{
            scale:[
                ['pageHeight*0.0','pageHeight*0.03'],
                [0,1]
            ],
            translateX:[
                ['pageHeight*0.0','pageHeight*0.03'],
                ['pageWidth-(pageWidth*1.1)','pageWidth*0.29']
            ],
            translateY:[
                ['pageHeight*0.0','pageHeight*0.03'],
                ['pageHeight-(pageHeight*1.1)','pageHeight*0.095']
            ]
        }
    });

    lax.addElements('.logo',{
        scrollY:{
            opacity:[
                [0,100,200],
                [1,0.5,1]
            ]
        }
    });

    lax.addElements('.goku1',{
        scrollY:{
           
            scale:[
                ['pageHeight*0.15','pageHeight*0.20'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.15','pageHeight*0.20'],
                ['pageHeight*0.00','pageHeight*0.001']
            ]

        }
    });

    lax.addElements('.goku2',{
        scrollY:{
            
            scale:[
                ['pageHeight*0.16','pageHeight*0.21'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.16','pageHeight*0.21'],
                ['pageHeight*0.00','pageHeight*0.010']
            ]
        }
    });

    lax.addElements('.goku3',{
        scrollY:{
            
            scale:[
                ['pageHeight*0.17','pageHeight*0.22'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.17','pageHeight*0.22'],
                ['pageHeight*0.00','pageHeight*0.020']
            ]
        }
    });

    lax.addElements('.goku4',{
        scrollY:{
            
            scale:[
                ['pageHeight*0.18','pageHeight*0.23'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.18','pageHeight*0.23'],
                ['pageHeight*0.00','pageHeight*0.030']
            ]
        }
    });

    lax.addElements('.goku5',{
        scrollY:{
            
            scale:[
                ['pageHeight*0.19','pageHeight*0.24'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.19','pageHeight*0.24'],
                ['pageHeight*0.00','pageHeight*0.040']
            ]
        }
    });

    lax.addElements('.goku6',{
        scrollY:{
            
            scale:[
                ['pageHeight*0.20','pageHeight*0.25'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.20','pageHeight*0.25'],
                ['pageHeight*0.00','pageHeight*0.050']
            ]
        }
    });

    lax.addElements('.goku7',{
        scrollY:{
            
            scale:[
                ['pageHeight*0.21','pageHeight*0.26'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.21','pageHeight*0.26'],
                ['pageHeight*0.00','pageHeight*0.060']
            ]
        }
    });

    lax.addElements('.goku8',{
        scrollY:{
            
            scale:[
                ['pageHeight*0.22','pageHeight*0.27'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.22','pageHeight*0.27'],
                ['pageHeight*0.00','pageHeight*0.070']
            ]
        }
    });

    lax.addElements('.goku9',{
        scrollY:{
            
            scale:[
                ['pageHeight*0.22','pageHeight*0.27'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.22','pageHeight*0.27'],
                ['pageHeight*0.00','pageHeight*0.080']
            ]
        }
    });

    lax.addElements('.ball1',{
        scrollY:{
            translateY:[
                ['pageHeight*0.31','pageHeight*0.37'],
                ['pageHeight*0.0','pageHeight-(pageHeight*1.11)']
            ]
        }
    });

    lax.addElements('.ball2',{
        scrollY:{
            translateY:[
                ['pageHeight*0.31','pageHeight*0.37'],
                ['pageHeight-(pageHeight*1.11)','pageHeight*0.0']
            ]
        }
    });

    lax.addElements('.ball3',{
        scrollY:{
            translateY:[
                ['pageHeight*0.31','pageHeight*0.37'],
                ['pageHeight*0.0','pageHeight-(pageHeight*1.11)']
            ]
        }
    });
    
    lax.addElements('.ball4',{
        scrollY:{
            translateY:[
                ['pageHeight*0.31','pageHeight*0.37'],
                ['pageHeight-(pageHeight*1.11)','pageHeight*0.0']
            ]
        }
    });

    lax.addElements('.ball5',{
        scrollY:{
            translateY:[
                ['pageHeight*0.31','pageHeight*0.37'],
                ['pageHeight*0.0','pageHeight-(pageHeight*1.11)']
            ]
        }
    });
    
    lax.addElements('.ball6',{
        scrollY:{
            translateY:[
                ['pageHeight*0.31','pageHeight*0.37'],
                ['pageHeight-(pageHeight*1.11)','pageHeight*0.0']
            ]
        }
    });

    lax.addElements('.ball7',{
        scrollY:{
            translateY:[
                ['pageHeight*0.31','pageHeight*0.37'],
                ['pageHeight*0.0','pageHeight-(pageHeight*1.11)']
            ]
        }
    });

    lax.addElements('.gokuVuelo',{
        scrollY:{
            scale:[
                ['pageHeight*0.45','pageHeight*0.56'],
                [0,1]
            ],
            translateY:[
                ['pageHeight*0.45','pageHeight*0.56'],
                ['pageHeight-(pageHeight*1.002)','pageHeight-(pageHeight*1.05)']
            ]
        }
    });

    lax.addElements('.vuelo17',{
        scrollY:{
            scale:[
                ['pageHeight*0.51','pageHeight*0.60'],
                [0.3,0.5]
            ],
            translateY:[
                ['pageHeight*0.51','pageHeight*0.60'],
                ['pageHeight-(pageHeight*1.140)','pageHeight-(pageHeight*1.160)']
            ],
            translateX:[
                ['pageHeight*0.51','pageHeight*0.60'],
                ['pageWidth-(pageWidth*1.3)','pageWidth*0.29']
            ]
        }
    });

    lax.addElements('.cell',{
        scrollY:{
            scale:[
                ['pageHeight*0.62','pageHeight*0.75'],
                [0,0.5]
            ],
            translateY:[
                ['pageHeight*0.62','pageHeight*0.75'],
                ['pageHeight-(pageHeight*1.28)','pageHeight-(pageHeight*1.10)']
            ],
            translateX:[
                ['pageHeight*0.62','pageHeight*0.75'],
                ['pageWidth*0.33','pageWidth-(pageWidth*1.64)']
            ]
        }
    });

};