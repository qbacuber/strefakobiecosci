import React from 'react'
import {PageTitle, ContactList, ContactItem, ContactImage, ContentCalender} from '../styles/style'

import Facebook from '../img/facebook.svg'
import Instagram from '../img/insta.svg'
import location from '../img/location.svg'
import calendar from '../img/calendar.svg'
import phone from '../img/phone.svg'

export default function Contact() {
    return (
        <>
            <PageTitle>Kontakt</PageTitle>
            <hr/>
            <ContactList>
                <ContactItem>
                    <ContactImage src={phone} alt="phone"/> <span><a href="tel:609-516-015">609 516 015</a> </span> <br/>
                    <ContactImage src={location} alt="location"/> <span><a href="http://maps.google.com/?q=Hyżne 100">Hyżne 100</a> </span>
                </ContactItem>
                <ContactItem>
                    <a href="https://www.facebook.com/strefakobiecoscisabinakozera/"> <ContactImage src={Facebook} alt="facebook"/> </a>
                    <a href="https://www.instagram.com/strefakobiecosci/"><ContactImage src={Instagram} alt="Instagram"/></a>
                </ContactItem>
                <ContactItem>
                    <ContentCalender src={calendar} alt="calendar"/><br/><br/>
                    PN ŚR PT <br/>
                    8-16<br/><br/>
                    WT CZW<br/>
                    12-19
                </ContactItem>
            </ContactList>
        </>
    )
}
