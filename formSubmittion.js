describe("Open Pratractor designed TestSuite",function(){

    it("Should open the site and navigate to Homa page",function(){
        browser.get("https://qaclickacademy.github.io/protocommerce/");

        element(by.name("name")).sendKeys("Anup");
        element(by.css("input[name='email')")).sendKeys("anup@test.com");
        element(by.id("exampleInputPassword1")).sendKeys("Test123");

        element(by.css("input[type='checkbox]")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();

    })

    it("Should validate the provided input fields",function(){


    })
})