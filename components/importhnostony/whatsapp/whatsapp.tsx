'use client'

import { useState } from "react";
import styles from './WhatsappButton.module.css';
import { WebSite } from "@/types/webSite";

export default function Whatsapp({ dataWebsite }: { dataWebsite: WebSite }) {
    // var message = "Hola%2c%20estoy%20interesado%20en%20los%20productos%20que%20vende%2e"
    const numero = dataWebsite.telefonoPrincipal
    const url = "https://api.whatsapp.com/send?phone=" + numero + "&text="

    // Estado local para almacenar el valor del input
    const [valorInput, setValorInput] = useState('');

    const toggleChating = () => {
        window.open(url + valorInput, '_blank');
        setValorInput("")
    };

    return (
        <>
            <div>
                <a className={styles.btn} onClick={toggleChating}>
                    <i className="bi bi-whatsapp"></i>
                </a>
            </div>
        </>
    )
}