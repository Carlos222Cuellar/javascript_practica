//la condicion switch lo que hace es ejecutar una porcion de codigo si se cumple una condicion dada
var signo = prompt('¿Cual es tu signo?') //pide datos al usuario por consola

//vamos a mostrar el horoscopo de hoy dependiendo del signo que ingrese el usuario

switch (signo.toLowerCase()) {

    case 'aries':
        console.log('Tensión sostenida en el trabajo. Aparecerán desacuerdos silenciosos que no se resuelven. Día largo, respira y ponte en acción.');
        break;
    case 'libra':
        console.log('Necesitas un descanso de las rutinas domésticas que te pesan últimamente. Busca la forma de bajar la presión que sientes.');
        break;
    case 'tauro':
        console.log('Tensión sostenida en el trabajo. Aparecerán desacuerdos silenciosos que no se resuelven. Día largo, respira y ponte en acción.');
        break;
    case 'geminis':
        console.log('Descubres aspectos que necesitan de tu concentración y profundidad mental. El resultado será una actitud racional ante las cosas.');
        break;
    case 'cancer':
        console.log('Trabajar en grupo te traerá más satisfacciones que amarguras. Sabrás escuchar opiniones y compartir posiciones. Comparte los logros.');
        break;
    case 'leo':
        console.log('Tus ideas son mucho más objetivas y por lo tanto más fáciles de realizar. Permítete un descanso luego de las obligaciones. Relájate.');
        break;
    case 'virgo':
        console.log('Busca la verdad y la objetividad en todos tus actos. Aléjate de las idas y vueltas emocionales. Lograrás solidez y tranquilidad.');
        break;
    case 'escorpio':
        console.log('Ante la toma de determinadas decisiones te sentirás solo. Deja en claro la situación para después no tener que pagar consecuencias.');
        break;
    case 'sagitario':
        console.log('Es necesario ver para creer. Despeja las dudas de tu mente. Confía en tu visión de los hechos y obtendrás la respuesta esperada.');
        break;
    case 'capricornio':
        console.log('Tendrás que adaptarte a los cambios o podrías sufrir consecuencias desagradables. Piensa que tendrás nuevas oportunidades.');
        break;
    case 'acuario':
        console.log('Si deseas tener nuevos amigos deberías ser sincero y ofrecerles tu ayuda y tu tiempo. Para recibir debes aprender a dar primero.');
        break;
    case 'picis':
        console.log('El destino puede jugarte una mala pasada. No pongas al descubierto tus dudas ni te traiciones. Confronta tus incertidumbres con hechos.');
        break;
    default:
        console.log('El signo que ingreso no es valido ingrese otro si quiere saber su horoscopo');
}