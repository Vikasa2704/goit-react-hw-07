
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectIsLoading, selectError } from './redux/selectors';

function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]); 
	return (
		<div className={css.container}>
			<h1>Phone book</h1>
			<ContactForm />
			<SearchBox />
			{error && <Error>Error message</Error>}
			{isLoading && <Loader>Loading message...</Loader>}
			<ContactList />
			</div>
	);
}

export default App;