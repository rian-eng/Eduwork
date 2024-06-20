const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCH = '#searchTerm';

class HomePage{
    static visit(){
        cy.visit(URL);
    }

    static fillSearchbox(online){
        cy.get(SEARCH).type('online {enter}');
    }
}

export default HomePage;