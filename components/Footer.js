import React from "react";
import Clock from 'react-live-clock';

export default function Footer() {
  return (
    <header>
      <div className='foot-container'>
        <a>AZLAN BLOG |</a>
        <a> @copyright 2020 |</a>
        <a href=''> Back To Top |</a>
        <a href='https://www.buymeacoffee.com/mohdazlanabas'> Buy Me Coffee |</a>
        <a href='https://www.paypal.com/paypalme/mohdazlanabas'> Use Paypal |</a>
        <a href='https://checkout.stripe.com/pay/cs_live_a1BUXvNHe42qmlZwlcXcFxuCQVcsLKWfzREAS0dZ7QyUfmshugcvtNFJj5#fidkdWxOYHwnPyd1blppbHNgWjA0TkA2fFdMYm5DYWRNRjFHNUhxZnNoNDNOc2BAX3dtQ19jZkd8STN1MzVAQUM1UVBybkl8Q3BNVVJjaW00c09rVEhNQkJJdzw9MVd1d2t3Qm43cFB9Ukp1NTU2SE08ZGFrYicpJ3VpbGtuQH11anZgYUxhJz8nNDFuPXJIZzw0MExNMTVIPXJyJyknd2BjYHd3YHcnPydtcXF1dj8qKmRhaGx3bGtiKHZrfGFgdygwZzFhMGYra2BxaWxjfCtkdXUqJ3gl'> Contribute Through Stripe | </a>
        <a href=' https://happy-davinci-dbedff.netlify.app/appcontact/'> CONTACT ME | </a>

       

        <Clock format={'h:mm:ssa'} style={{fontSize: '1em'}} ticking={true} />
      </div>
    </header>
  )
}