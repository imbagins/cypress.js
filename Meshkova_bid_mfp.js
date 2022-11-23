describe('Тестирование сайта МФП пейнтбол', function () {
    
    it('Заходим на сайт и переходим на страницу цен и заполняем данные', function () {
        cy.visit('http://www.paintballmfp.ru/');
        cy.get('.title > section > nav > .nav_block > .nav > .item-104 > .fadeInUp').click();
        cy.get('.select > .jq-selectbox > .jq-selectbox__select > .jq-selectbox__trigger').click();
        cy.get('.select > .jq-selectbox > .jq-selectbox__dropdown > ul > :nth-child(3)').click(); //выбираем клуб
      //  cy.get('#dp1669205279916').click();
      //  cy.get('#dp1669206035239').click();
      //  cy.get('.ui-datepicker-group-last > .ui-datepicker-calendar > tbody > :nth-child(4) > :nth-child(7) > .ui-state-default').click(); //выбираем дату в календаре
        cy.get('.ui-timepicker-input').click(); //выбираем время
        cy.get('.ui-timepicker-list > :nth-child(6)').click();
        cy.get('.order_duration_div > .jq-selectbox > .jq-selectbox__select > .jq-selectbox__trigger').click(); //выбираем тариф
        cy.get('.order_duration_div > .jq-selectbox > .jq-selectbox__dropdown > ul > :nth-child(3)').click(); // тариф
        cy.get('.row > :nth-child(1) > :nth-child(2) > input').type('10 человек, возраст 12-14 лет');
        cy.get(':nth-child(2) > .jq-selectbox > .jq-selectbox__select > .jq-selectbox__trigger').click(); //оплата за
        cy.get(':nth-child(2) > .jq-selectbox > .jq-selectbox__dropdown > ul > :nth-child(3)').click(); //праздничное оформление

        cy.get('[style="margin-top: 38px;"] > input').clear().type('6500');
        cy.get('.row_bottom > input').click();
        cy.contains('Ноябрь 2022');



         })

    
})
