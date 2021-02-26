import React from "react";

function Header() {
    const styleObj = {
        fontSize: 40,
        textShadow: [3, 3, 0, "#000",
            -1, - 1, 0, "#000",  
             1, -1, 0, "#000",
            -1,  1, 0, "#000",
             1,  1, 0, "#000"]
    };
    const header = {
        fontFamily: ["Satisfy", "cursive"],
    };
    const h1 = {
        fontSize: 80 
    };
    const p = {
        fontSize: 20,
        fontFamily: ['Josefin Sans', 'sans-serif']
    };

    const btn = {
        width: 70, 
            height: 70, 
            padding: [10, 16], 
            borderRadius: 35, 
            fontSize: 12, 
            color: "white",
            backgroundColor: "black",
            
    }
    

    return (
        <div className="jumbotron jumbotron-fluid bg-dark text-white border-bottom border-5 border-dark" style={header}>
        <div className="container">
        <h1 className="display-4 text-center" style={h1}>  Employee Directory  </h1> 
                <div className="text-center mt-4">
                    <span>
                    
                            <i className="fas fa-users text-center" style={styleObj}> </i>
                        
                            <i className="fas fa-phone-alt ml-5" style={styleObj}></i>
                      
                            <i className="fas fa-mail-bulk ml-5" style={styleObj}></i>
                        
                    </span>
                </div>
                <p className="text-center mt-4" style={p}>Need to look for an Employee? We can help!</p>
                
        </div>
      </div>
    )
};

export default Header;
