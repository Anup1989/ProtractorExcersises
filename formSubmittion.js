describe("Open Pratractor designed TestSuite",function(){

    it("Should open the site and navigate to Homa page",function(){
        browser.get("https://qaclickacademy.github.io/protocommerce/");

        element(by.name("name")).sendKeys("Anup");
        element(by.css("input[name='email')")).sendKeys("anup@test.com");
        element(by.id("exampleInputPassword1")).sendKeys("Test123");

        element(by.css("input[type='checkbox]")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();

        
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText('Submit')).click().then(function(){

         let successmessage=   element(by.class("div[class='success']")).getText().then(function(text){
                console.log(text);
            })
            element(by.name("name")).clear();
            element(by.name("name")).sendKeys("M").then(function(){
                let errormessage1=  element(by.css("[class='alert alert-danger']")).getText().then(function(errormessage){
                    console.log("Error message is : "+errormessage)
                })
            })
         if (successmessage == true) {
             console.log("The Test Case has been passed.");
         } else {
            console.log("The Test Case has been passed.");
         }


         if(errormessage1!= errormessage && errormessage1 == errormessage){
            console.log("The Error has been captured and the valiadtion is working properly");
         }else{
            console.log("Validation failed");
         }
        });

        

    })

    it("Should validate the provided input fields",function(){


    })
})