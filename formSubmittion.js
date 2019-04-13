describe("Open Pratractor designed TestSuite",function(){

    it("Should open the site and navigate to Homa page",function(){
        browser.get("https://qaclickacademy.github.io/protocommerce/");

        element(by.name("name")).sendKeys("Anup");
        element(by.css("input[name='email')")).sendKeys("anup@test.com");
    })

    it("Should validate the provided input fields",function(){


    })
})