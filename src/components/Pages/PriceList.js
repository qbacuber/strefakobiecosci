import React from 'react'
import {PageTitle, ItemList, Item, ItemName, ItemPrice} from '../styles/style'


const ListPrice = [
    ["Manicure klasyczny z odżywką", "35zł"],
    ["Manicure hybrydowy z bazą utwardzającą", "50zł"],
    ["Przedłużenie paznokci żelem na formie", "100zł"],
    ["Uzupełnienie paznokci żelowych/utwardzenie żelem naturalnej płytki", "70zł"],
    ["Zdobienia(wycena indywidualna)", "5-20zł"],
    ["Manicure męski", "30zł"],
    ["Manicure japoński", "50zł"],
    ["Zabieg parafinowy na dłonie", "30zł"],
    ["Zabieg SPA na dłonie", "35zł"],
    ["Pedicure klasyczny z odżywką/lakierem (opracowanie płytki paznokciowej +lakierowanie)", "40zł"],
    ["Pedicure frezarkowy (opracowanie stopy+płytki paznokciowej)", "70zł"],
    ["Pedicure frezarkowy z hybrydą", "90zł"],
    ["Pedicure hybrydowy (przygotowanie płytki paznokciowej i położenie hybrydy)", "60zł"],
    ["Pedicure SPA", "130zł"],
    ["Pedicure męski", "60zł"],
    ["Usuniecięcie stylizacji żelowej", "20zł"],
    ["Usunięcie stylizacji hybrydowej", "10zł"],
    ["Usunięcie stylizacji wykonanej w naszym salonie", "GRATIS"],
    ["Henna żelowa + regulacja ", "35zł"],
    ["Henna pudrowa + regulacja", "50zł"],
    ["Lifting, laminacja, botox i henna rzęs ", "100zł"],
]

export default function PriceList() {
    return (
        <>
            <PageTitle>Cennik</PageTitle>
            <hr/>
            <ItemList>
                {ListPrice.map((i, index)=>
                <Item key={index}>
                    <ItemName>{i[0]}</ItemName>  
                    <ItemPrice>{i[1]}</ItemPrice>
                </Item>)}
            </ItemList>
        </>
    )
}
