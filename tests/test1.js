module.exports = {
    '@tags': ['test1'],
    'Test di Kalcare (Mobile)'(browser){
     
     const tentang_sf = '.about-button-text';
     const nama ='nugie';
     const email ='nugie@gmail.com';

    browser
         .url('https://mkalcare.karsalintasbuwana.com/')
         .assert.urlContains('https://mkalcare.karsalintasbuwana.com/', 'Home Page');
//HEADER (#__next > header)
    browser
        .useXpath()
            .assert.elementPresent("//img[@src = 'static/img/kalcare.svg']", 'Logo KALCare')
            .assert.elementPresent("//*[@src = 'static/img/poin_kalcare.svg']", 'Logo Point')
            .assert.elementPresent("//*[@id='__next']/header/div/div/div[4]", 'Nilai Point')
            .assert.elementPresent("//*[@class = 'MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit' and @type = 'button']", 'Logo Notification (type : button)')
//BODY-MENU (#__next > div.MuiContainer-root.MuiContainer-maxWidthSm)            
            .assert.elementPresent("//button[@type = 'button' and (text() = 'E-Shop' or . = 'E-Shop')]", 'Button E-Shop')
            .assert.elementPresent("//button[@type = 'button' and (text() = 'Pesan Antar' or . = 'Pesan Antar')]", 'Button Pesan Antar')
            .assert.elementPresent("//button[@type = 'button' and (text() = 'Outlets' or . = 'Outlets')]", 'Button Outlets')
            .assert.elementPresent("//button[@type = 'button' and (text() = 'Promo' or . = 'Promo')]", 'Button Promo')
            .assert.elementPresent("//button[@type = 'button' and (text() = 'Rewards' or . = 'Rewards')]", 'Button Rewards')
            .assert.elementPresent("//button[@type = 'button' and (text() = 'Spot' or . = 'Spot')]", 'Button Spot')
            .assert.elementPresent("//button[@type = 'button' and (text() = 'Upload Struk' or . = 'Upload Struk')]", 'Button Upload Struk')
            .assert.elementPresent("//button[@type = 'button' and (text() = 'Articles' or . = 'Articles')]", 'Button Articles');
//BODY-SLIDE
    browser
            .assert.elementPresent("//*[@class = 'slider-frame']", 'Slide Frame')
            .assert.elementPresent("//*[@class = 'MuiBox-root jss267']", 'KALCare Outlet')
            .assert.elementPresent("//*[@class = 'MuiBox-root jss311']", 'Chat dengan Kalina')
//FOOTER (#__next > div.jss250.jss251)
    browser     
            .assert.elementPresent("//*[@role = 'button' and (text() = 'Beranda' or . = 'Beranda')]", 'Button Beranda')
            .assert.elementPresent("//*[@role = 'button' and (text() = 'Riwayat' or . = 'Riwayat')]", 'Button Riwayat')
            .assert.elementPresent("//*[@role = 'button' and (text() = 'Official Store' or . = 'Official Store')]", 'Button Official Store')
            .assert.elementPresent("//*[@role = 'button' and (text() = 'Kalina' or . = 'Kalina')]", 'Button Kalina')
            .assert.elementPresent("//*[@role = 'button' and (text() = 'Akun' or . = 'Akun')]", 'Button Akun')
            .click("//a[@role = 'button' and (text() = 'Akun' or . = 'Akun')]")
            .saveScreenshot('tests_output/mkalcare.png')
            .end();
 }
}