var contacts = [
  {
    id: 1,
    firstName: 'Anna',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com'
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com'
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com'
  },
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
      <div className={'app'}>
        <p className={'appTitle'}>moje kontakty</p>
        <ContactForm contact={contactForm}></ContactForm>
        <div className={'personBox'}>
          <Contacts items={contacts}></Contacts>
        </div>
      </div>
    );
  }
});
