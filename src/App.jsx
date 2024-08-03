
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import css from './App.module.css';

function App() {
	return (
		<div className={css.container}>
			<h1>Phone book</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
			</div>
	);
}

export default App;