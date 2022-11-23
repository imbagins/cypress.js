describe('Тестирование сайта staya', function () {
    
    it('Заходим на сайт и авторизуемся, далее - проверяем авторизацию', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('ugoslavi13@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Qwedcvb1');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
       
         })

    
})
