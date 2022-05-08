
import Container from './Container/Container';
import s from '../App.module.css';
import { useFetchContactsQuery } from '../redux/slice';
import { FaRegAddressBook } from 'react-icons/fa';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notiflix from 'notiflix';
import { useEffect } from 'react';



export default function ContactsPage() {

    const { data, error, isFetching } = useFetchContactsQuery()


    return (
      <>

      <Container>
    {/* {error && Notiflix.Notify.failure(error.data.message)} */}



        <h1 className={s.title}>Phone Book <FaRegAddressBook style={{ width: 25, height: 25, marginLeft: '10px'}}/></h1>
        <Form contacts={data}/>
  
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList data={data}/>
      </Container>
      </>
    );
  }
  