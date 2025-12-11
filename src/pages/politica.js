import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Loader from '../components/loader';

const Politica = () => {
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden';
    //     setTimeout(() => {
    //         setIsLoading(false);
    //         document.body.style.overflow = 'auto';
    //     }, 500);
    // }, [])

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }, [])
    return (
        <>

            {/* Titulo de la pagina */}
            <title>BIMO | Política de Privacidad </title>
            {/* Loader */}
            {/* {isLoading && <Loader />} */}
            {/* Seccion Hero de la pagina */}
            <div className="bg-cover-page bg-serotonina">
                <div className='text-container'>
                    <h2 className='text-center text-light display-5'>Aviso de Privacidad Integral   </h2>
                    <h3 className='text-center text-pantone' style={{
                        fontSize: "1.25rem"
                    }}>Para clientes, pacientes y usuarios. </h3>
                </div>
            </div>
            {/* Contenido de la paginas */}
            <section className='p-3'>
                <div className="container py-5">
                    <h1 className='text-center text-uppercase mb-5 fw-bold text-pantone-2'>
                        AVISO DE PRIVACIDAD INTEGRAL PARA CLIENTES, PACIENTES
                        Y USUARIOS DE DIAGNÓSTICO BIOMOLECULAR S.A. DE C.V.
                    </h1>
                    <p className='text-p text-start'>
                        El tratamiento legítimo, controlado e informado de sus datos personales es de vital importancia
                        para alcanzar los objetivos de Diagnóstico Biomolecular S.A. de C.V., (en adelante “Diagnóstico
                        Biomolecular") a través de todas las áreas, sucursales, clínicas de atención médica o laboratorios,
                        reiterando el compromiso con su privacidad y el derecho a la autodeterminación informativa, por
                        lo que, en cumplimiento a lo establecido en la Ley Federal de Protección de Datos Personales en
                        Posesión de los Particulares (LFPDPPP), ponemos a su disposición nuestro AVISO DE
                        PRIVACIDAD.
                        <br />
                        <br />
                        Aplicará para todos los productos, servicios, programas, promociones, redes sociales y/o sitio web
                        oficial, que tenga Diagnóstico Biomolecular de acuerdo con la naturaleza de los Datos Personales
                        recabados y conforme a la legislación vigente en materia de privacidad y protección de Datos
                        Personales; Diagnóstico Biomolecular, podrá publicar nuevos Avisos de Privacidad específicos o
                        actualizaciones y para los cuales se podrá requerir o no, el consentimiento expreso del titular de
                        los Datos Personales, sin embargo, a través de nuestra página web www.bimo.com.mx o en
                        nuestras redes sociales u oficinas, se hacen del conocimiento público las políticas de privacidad
                        aplicables a los Datos Personales que nos hayan sido otorgados.
                        <br />
                        <br />
                        <br />
                        <strong> 1. IDENTIDAD Y DOMICILIO DEL RESPONSABLE.</strong> <br /> <br />
                        Para efectos de los Datos Personales que en su caso usted haya proporcionado o pudiera
                        proporcionar a Diagnóstico Biomolecular, a través de diversos medios y/o formas incluyendo
                        nuestros sitios de internet, redes sociales, herramientas tecnológicas y con motivo de la relación
                        o posible relación por el uso de nuestros productos, servicios, programas y/o promociones, así
                        como para cualquier actividad relacionada, Diagnóstico Biomolecular es responsable del uso y
                        protección de sus datos personales, quien es una sociedad constituida de conformidad con las
                        leyes de la República Mexicana, con domicilio para efectos del presente documento el ubicado en
                        Blvd. Adolfo Ruiz Cortines 1344, Piso 2 Oficina 200, Col. Tabasco 2000, C.P. 86035 Villahermosa,
                        Centro, Tabasco, México.
                        <br />
                        <br />
                        De conformidad con lo dispuesto por la LFPDPPP, Diagnóstico Biomolecular está comprometida
                        en manejar los datos personales que usted le proporcione, observando en todo momento los
                        principios de licitud, consentimiento, información, calidad, finalidad, lealtad y proporcionalidad.
                        <br />
                        <br />
                        <strong>2. DATOS PERSONALES QUE SE RECABAN.</strong> <br /> <br />
                        Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad por Diagnóstico
                        Biomolecular, podrá recabar de forma enunciativa mas no limitativa y, en su caso, tratar los datos
                        personales que mas adelante se especifican, con base en la relación que exista o pudiera existir
                        con el titular: <br />
                        • Nombre completo. <br />
                        • Edad. <br />
                        • Estado civil. <br />
                        • Sexo. <br />
                        • Fecha de nacimiento. <br />
                        • Número de teléfono celular. <br />
                        • Domicilio. <br />
                        • Correo electrónico. <br />
                        • Clave Única de Registro de Población (CURP). <br />
                        • Registro Federal del Contribuyente (RFC). <br />
                        • Peso, talla, tratamiento, diagnóstico. <br />
                        • Nombre del médico solicitante. <br />
                        • Datos clínicos y antecedentes. <br />
                        • Numero de afiliación, en caso de ser referido por alguna institución o aseguradora. <br />
                        • INE, pasaporte o cédula profesional vigente.
                        <br />
                        <br />
                        <strong> 3. FINALIDAD DEL TRATAMIENTO DE DATOS PERSONALES RECABADOS POR
                            DIAGNÓSTICO BIOMOLECULAR.</strong>
                        <br />
                        <br />
                        Los datos personales que Diagnóstico Biomolecular, recaba de usted a través de su portal internet,
                        por escrito o cualquier medio, ya sea por correo electrónico, directamente en sucursales, mediante
                        las aplicaciones informáticas que tiene Diagnóstico Biomolecular, por teléfono, a través del sistema
                        de mejora continua y de calidad y a través de redes sociales serán utilizados para las finalidades
                        necesarias para la relación que existe en virtud de los servicios y/o productos que presta y/o vende
                        Diagnóstico Biomolecular.
                        <br />
                        <br />
                        Los datos personales que Diagnóstico Biomolecular recabe de usted serán utilizados para las
                        siguientes finalidades:
                        <br />
                        <br />
                        <strong>A.- FINALIDADES PRIMARIAS.</strong> <br /> <br />
                        Diagnóstico Biomolecular requiere utilizar sus datos personales para incluirlo en su base de datos
                        de usuarios y/o pacientes, para registrarlo en sus sucursales, para brindarle el servicio de
                        laboratorio de análisis clínicos, y entrega de resultados, para elaborar perfiles de usuarios de
                        pacientes y el documento de consentimiento informado, para darle acceso al portal que tiene
                        Diagnóstico Biomolecular para usuarios y/o pacientes de Diagnóstico Biomolecular a fin de que
                        pueda consultar los resultados de las pruebas de laboratorio de análisis clínicos, para emitir la
                        factura correspondiente a los servicios y/o productos que presta y/o vende Diagnóstico
                        Biomolecular, para administrar y operar los servicios y/o productos que presta y/o vende
                        Diagnóstico Biomolecular, así como para cumplir las obligaciones derivadas de la adquisición de
                        sus productos y/o servicios contratados.
                        <br />
                        <br />
                        Diagnóstico Biomolecular utilizará sus datos personales para fines administrativos, para atender
                        cualquier queja entablada por los servicios y/o productos que presta y/o vende Diagnóstico
                        Biomolecular y para cumplir con cualquier obligación legal, de servicio o cualquier vínculo que
                        exista o llegase a existir, así como para defender o entablar una demanda, reclamación, queja, o
                        trámite ante alguna autoridad. En términos del artículo 10, fracción IV de la LFPDPPP no es
                        necesario su consentimiento para el tratamiento de estos datos personales.
                        <br />
                        <br />
                        Los datos también son utilizados para su correcto registro, integración de servicios de salud,
                        prestación de servicios de laboratorio clínico, servicios auxiliares, clínicos, de estadística, cobro,
                        gestión y mejora de servicios de salud.
                        <br />
                        <br />
                        <strong>B.- FINALIDADES SECUNDARIAS.</strong> <br /> <br />
                        De manera adicional, Diagnóstico Biomolecular podrá utilizar sus datos personales para las
                        siguientes finalidades secundarias:
                        <br />
                        <br />
                        El envío mediante cualquier medio electrónico de comunicaciones, promociones y materiales
                        publicitarios de nuestros servicios y/o productos (incluyendo servicios y/o productos nuevos).
                        <br />
                        <br />
                        El envío de invitaciones a eventos.
                        <br />
                        <br />
                        Para hacer encuestas, investigaciones, análisis, informes estadísticos y evaluaciones en relación
                        con la prestación de los servicios y/o productos que presta y/o vende Diagnóstico Biomolecular.
                        <br />
                        <br />
                        En caso de que no desee que sus datos personales sean tratados para estos fines secundarios
                        favor de realizar la solicitud correspondiente y presentarlo en la Dirección Ejecutiva de Diagnóstico
                        Biomolecular.
                        <br />
                        <br />
                        El procedimiento para manifestar la negativa al tratamiento de sus datos personales para las
                        finalidades secundarias será el mismo procedimiento previsto para el ejercicio de los derechos
                        indicado en el presente Aviso de Privacidad. La negativa para el uso de sus datos personales para
                        estas finalidades secundarias no podrá ser un motivo para que no se le preste y/o venda los
                        servicios y/o productos de Diagnóstico Biomolecular.
                        <br />
                        <br />
                        A continuación, se enlista las finalidades para las que trataremos sus datos personales, esto de
                        forma ejemplificativa, enunciativa y no limitativa:
                        <br />
                        <br />
                        • Identificación, contacto y/o localización. <br />
                        • Historial del usuario de los servicios. <br />
                        • Cumplimiento de obligaciones de servicio u otro. <br />
                        • De control, seguridad, mejoras en el servicio, cobro. <br />
                        • Rectificar vínculo comercial. <br />
                        • Mejorar nuestras iniciativas comerciales y promocionales (mercadotecnia). <br />
                        • Enviar información o mensajes sobre nuevos productos y/o servicios. <br />
                        • Atender su solicitud de información, de productos o solicitud de uso de los mismos,
                        incluyendo única y expresamente los servicios de Diagnóstico Biomolecular. <br />
                        • Atender cualquier queja, pregunta o comentario. <br />
                        • Envío de notificaciones, avisos, propaganda o publicidad sobre nuestros productos o
                        servicios en la medida que así lo permita la legislación aplicable. <br />
                        • Envío de información y noticias de nuestros servicios, así como comunicaciones o
                        publicidad. <br />
                        • Envío de notificaciones de cambios a este aviso de privacidad.
                        <br />
                        <br />

                        <strong>4. DATOS PERSONALES TRATADOS POR DIAGNÓSTICO BIOMOLECULAR.</strong><br /> <br />
                        Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad, de conformidad
                        con el artículo 3 de la LFPDPPP, Diagnóstico Biomolecular podrá utilizar sus datos personales de
                        identificación, contacto, fiscales, laborales, y patrimoniales, así como datos de contacto de su(s)
                        médico(s). En términos del artículo 10, fracciones IV y VI de la LFPDPPP no es necesario su
                        consentimiento para el tratamiento de sus datos personales.
                        <br />
                        <br />
                        Adicionalmente, en caso de proporcionar datos personales de otros titulares de datos personales,
                        como es el caso del médico o de los médicos que lo atienden, manifiesta contar con el
                        consentimiento de dichos titulares para proporcionarnos los datos personales y reconoce su
                        obligación de informar a dicho titular o titulares que ha proporcionado sus datos, así como de los
                        lugares en los que se encuentra a su disposición el presente Aviso de Privacidad para su consulta.

                        <br />
                        <br />
                        <strong>  5. PREVISIONES ESPECIALES PARA EL TRATAMIENTO DE DATOS PERSONALES DE</strong> <br /> <br />
                        MENORES Y PERSONAS CON INCAPACIDADES O EN ESTADO DE INTERDICCIÓN.
                        Le informamos que es de especial interés de Diagnóstico Biomolecular cuidar la información
                        personal de menores de edad, personas en estado de interdicción y personas con capacidades
                        diferentes en términos de ley, a través del establecimiento de medidas específicas, como son: <br />
                        <br />
                        a. La obtención del consentimiento de los padres y/o de los tutores por medio de una
                        declaración expresa contenida en el Contrato de Adhesión. <br />
                        b. La verificación de la identidad del padre y/o tutor que se realiza de manera directa en las
                        sucursales de Diagnóstico Biomolecular. <br />
                        c. La implementación y mantenimiento de medidas de seguridad al interior de Diagnóstico
                        Biomolecular a efecto de asegurar la confidencialidad de los datos de menores y este grupo
                        de personas.
                        <br />
                        <br />
                        <strong> 6. DATOS PERSONALES SENSIBLES TRATADOS POR DIAGNÓSTICO BIOMOLECULAR.</strong> <br /> <br />
                        En su caso, además de los datos personales mencionados anteriormente, para las finalidades
                        informadas en el presente Aviso de Privacidad para usuarios o pacientes de Diagnóstico
                        Biomolecular, de conformidad con el artículo 3 de la LFPDPPP, podrá utilizar cuando así lo exijan
                        las circunstancias los datos personales sensibles de salud.
                        <br />
                        <br />
                        Otorgo mi consentimiento de forma consiente para que mis datos personales sensibles como
                        pueden ser: Antecedentes médicos, resultados de estudios, y cualquier otro arrojado o
                        proporcionado derivado del servicio proporcionado por Diagnóstico Biomolecular, sean tratados
                        conforme a lo señalado en el presente Aviso de Privacidad y de conformidad con la LFPDPPP, no
                        oponiéndome al Aviso de Privacidad. Ningún dato será tratado sino hasta tres días después de
                        que hayan sido proporcionados por el usuario y este no haya manifestado su negativa.
                        <br />
                        <br />
                        <strong> 7. MECANISMOS DE SEGURIDAD Y ALMACENAMIENTO DE DATOS PERSONALES.</strong> <br /> <br />
                        Diagnóstico Biomolecular, implementará las medidas de seguridad, técnicas, administrativas y
                        físicas, necesarias para procurar la integridad de sus datos personales y evitar su daño, pérdida,
                        alteración, destrucción o el uso, acceso o tratamiento no autorizado.
                        Únicamente el personal autorizado de Diagnóstico Biomolecular, que ha cumplido y observado los
                        correspondientes requisitos de confidencialidad, podrá participar en el tratamiento de sus datos
                        personales. El personal autorizado tiene prohibido permitir el acceso de personas no autorizadas
                        y utilizar sus datos personales para fines distintos a los establecidos en el presente Aviso de
                        Privacidad. <br /> <br />
                        La obligación de confidencialidad de las personas que participan en el tratamiento de sus datos
                        personales subsiste aun después de terminada la relación con Diagnóstico Biomolecular.
                        <br /> <br />
                        Diagnóstico Biomolecular podrá conservar sus Datos Personales en bases de datos ubicadas en
                        los Estados Unidos Mexicanos, en el entendido de que se han implementado políticas y
                        estándares comerciales razonables de tecnología y seguridad para proteger la información que
                        nos haya sido proporcionada.

                        <br />
                        <br />
                        <strong>      8. MEDIOS Y PROCEDIMIENTO PARA EJERCER LOS DERECHOS DE ACCESO,
                            RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN (DERECHOS ARCO).</strong> <br /> <br />
                        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y
                        las condiciones del uso que les damos. Asimismo, es su derecho solicitar la corrección de su
                        información personal en caso de que esté desactualizada, sea inexacta o incompleta, que la
                        eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo
                        utilizada conforme a los principios, deberes y obligaciones previstas en este Aviso de Privacidad
                        o conforme a la normatividad aplicable. Así como oponerse al uso de sus datos personales para
                        los fines establecidos en este Aviso de Privacidad. Estos derechos se conocen como derechos
                        ARCO.
                        <br />
                        <br />
                        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá solicitar y presentar en la
                        Dirección Ejecutiva en el domicilio y horario señalado en el presente documento su solicitud
                        conforme a la LFPDPPP. La solicitud deberá estar debidamente completada y acompañada de la
                        documentación que ahí se indica para acreditar su identidad y de cualquier otra documentación
                        que se requiera conforme a dicha solicitud.
                        <br />
                        <br />
                        Una vez recibida su solicitud, si la información que usted nos proporcionó a través de la misma
                        es errónea o insuficiente o no acompañó la documentación necesaria, la Dirección Ejecutiva
                        contará con un plazo de 7 (siete) días hábiles para requerirle información o cualquier documento
                        que sea necesario para dar trámite a su solicitud. En su caso, Diagnóstico Biomolecular le enviará
                        el requerimiento a la dirección de correo electrónico que usted haya especificado en la solicitud.
                        Usted contará con un plazo de 7 (siete) días hábiles, contados a partir del día siguiente a aquél en
                        que reciba el requerimiento de Diagnóstico Biomolecular, para dar cumplimiento a dicho
                        requerimiento.
                        <br />
                        <br />
                        En caso de que la Dirección Ejecutiva de Diagnóstico Biomolecular no reciba su respuesta en el
                        plazo establecido para el cumplimiento del requerimiento que se le envíe, se entenderá que la
                        solicitud no ha sido presentada y Diagnóstico Biomolecular no tendrá obligación de dar trámite a
                        la misma.
                        <br />
                        <br />
                        La Dirección Ejecutiva de Diagnóstico Biomolecular contará con un plazo de 20 (veinte) días
                        hábiles contados desde la fecha en que recibió su solicitud o desde la fecha en que usted dio
                        cumplimiento al requerimiento de Diagnóstico Biomolecular, según sea el caso, para dar respuesta
                        a la solicitud. La respuesta a dicha solicitud será enviada a la dirección de correo electrónico que
                        usted haya especificado en la solicitud.
                        <br />
                        <br />
                        En caso de que su solicitud sea procedente, la Dirección Ejecutiva de Diagnóstico Biomolecular
                        contará con un plazo de 15 (quince) días hábiles para hacer efectiva la solicitud. En caso de que
                        la solicitud implique la reproducción de datos personales solicitados, Diagnóstico Biomolecular
                        pondrá a su disposición una copia en versión electrónica de los mismos que será enviada a la
                        dirección de correo electrónico que usted haya especificado en la solicitud, o bien, Diagnóstico
                        Biomolecular pondrá a su disposición una copia física de dichos datos, la cual podrá recoger en el
                        domicilio de Diagnóstico Biomolecular indicado en el presente Aviso de Privacidad.
                        <br />
                        <br />
                        En los supuestos permitidos por la ley, la Dirección Ejecutiva podrá resolver negarse al ejercicio
                        de los derechos ARCO. En caso de negativa, la Dirección Ejecutiva de Diagnóstico Biomolecular
                        le informará los motivos para dicha negativa a través de un correo electrónico que le será enviado
                        a la dirección de correo electrónico que usted haya especificado en la solicitud. Si la negativa es
                        parcial, la Dirección Ejecutiva realizará el trámite de los derechos ARCO que procedan.
                        <br /><br />
                        La Dirección Ejecutiva de Diagnóstico Biomolecular podrá prorrogar, por una sola vez, los plazos
                        contenidos en el presente Aviso de Privacidad, en cuyo caso, deberá notificarle dicha prórroga
                        antes de que se venzan los plazos establecidos en este Aviso de Privacidad.
                        <br />
                        <br />
                        <strong> 9. MEDIOS Y PROCEDIMIENTO PARA REVOCAR SU CONSENTIMIENTO AL TRATAMIENTO
                            DE SUS DATOS PERSONALES.</strong>
                        <br />
                        <br />
                        Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de
                        sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos
                        podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por
                        alguna obligación legal requiramos seguir tratando sus datos personales. En términos del artículo
                        10, fracción IV de la LFPDPPP no es necesario su consentimiento para el tratamiento de sus datos
                        personales.
                        <br />
                        <br />
                        El procedimiento para revocar su consentimiento será el mismo procedimiento previsto para el
                        ejercicio de los derechos ARCO indicado en el numeral anterior. Por lo que, usted deberá solicitar
                        y presentar su solicitud ante la Coordinación Jurídica de Protección de Datos Personales de
                        Diagnóstico Biomolecular, llenando la sección correspondiente a Revocación de Consentimiento.
                        <br />
                        <br />
                        <strong>10. LIMITACIÓN DEL USO Y/O DIVULGACIÓN DE SUS DATOS PERSONALES.</strong>
                        <br />
                        <br />
                        Con objeto de que usted pueda limitar el uso y/o divulgación de sus datos personales, Diagnóstico
                        Biomolecular le ofrece los siguientes medios:
                        <br />
                        <br />
                        Su registro en el “Listado de Exclusiones de Diagnóstico Biomolecular", a fin de que sus datos
                        personales no sean tratados para fines mercadotécnicos, publicitarios o de invitación a eventos
                        por nuestra parte. Para mayor información comunicarse a la Coordinación Jurídica de Protección
                        de Datos Personales de Diagnóstico Biomolecular.
                        <br />
                        <br />
                        Su inscripción en el Registro Público para Evitar Publicidad, que está a cargo de la Procuraduría
                        Federal del Consumidor, con la finalidad de que sus datos personales no sean utilizados para
                        recibir publicidad o promociones de empresas de bienes o servicios. Para mayor información sobre
                        este registro, usted puede consultar el portal de Internet de la PROFECO, o bien ponerse en
                        contacto directo con ésta.
                        <br />
                        <br />
                        <strong> 11. CAMBIOS O MODIFICACIONES EN EL AVISO DE PRIVACIDAD.</strong>
                        <br />
                        <br />
                        Diagnóstico Biomolecular podrá modificar, cambiar o actualizar el presente Aviso de Privacidad
                        derivado de nuevos requerimientos legales, de nuestras propias necesidades por los servicios que
                        ofrecemos, de nuestras prácticas de privacidad, de cambios a nuestro modelo de negocio o por
                        otras causas. Diagnóstico Biomolecular se compromete a mantenerlo informado sobre los
                        cambios, modificaciones o actualizaciones al Aviso de Privacidad.
                        <br />
                        <br />
                        Diagnóstico Biomolecular notificará de cualquier cambio, modificación o actualización al Aviso de
                        Privacidad mediante la publicación de un apartado de modificación al Aviso de Privacidad en su
                        portal de internet.
                        <br />
                        <br />
                        Diagnóstico Biomolecular hará dicha notificación con 15 (quince) días de anticipación a la fecha
                        en que los cambios, modificaciones o actualización del Aviso de Privacidad tengan lugar.
                        <br />
                        <br />
                        <strong> 12. COORDINACIÓN JURÍDICA DE PROTECCIÓN DE DATOS PERSONALES DE
                            DIAGNÓSTICO BIOMOLECULAR.</strong>
                        <br />
                        <br />
                        La Dirección Ejecutiva de Diagnóstico Biomolecular está encargada de atender las peticiones de
                        ejercicio de los derechos ARCO, de solicitudes de revocación de consentimiento, de negativa para
                        utilización de datos personales para finalidades secundarias, así como de solicitudes para limitar
                        el uso y/o divulgación de sus datos personales, asímismo para velar por la protección de dichos
                        datos personales al interior de Diagnóstico Biomolecular.
                        <br />
                        <br />
                        <strong>Nombre:</strong> Dirección Ejecutiva de Diagnóstico Biomolecular.
                        <br />
                        <br />
                        <strong>Dirección</strong>:  Avenida José Pages Llergo, Núm. 150, Colonia Arboledas, C.P. 86079,
                        Villahermosa, Centro, Tabasco, México.
                        <br />
                        <br />
                        <strong>Horario de atención:</strong> 7:00 a 14:00 horas.
                        <br />
                        <br />
                        <strong> 13. INSTITUTO NACIONAL DE TRANSPARENCIA, ACCESO A LA INFORMACIÓN Y
                            PROTECCIÓN DE DATOS PERSONALES (INAI).</strong>
                        <br />
                        <br />
                        Si usted considera que su derecho a la protección de sus datos personales ha sido lesionado por
                        alguna conducta u omisión de parte de Diagnóstico Biomolecular o presume alguna violación a las
                        disposiciones previstas en la LFPDPPP, su reglamento y demás ordenamientos aplicables, podrá
                        interponer su inconformidad o denuncia ante el Instituto Nacional de Transparencia, Acceso a la
                        Información y Protección de Datos Personales (INAI) https://home.inai.org.mx/
                        <br />
                        <br />
                        Manifiesto que he leído y entiendo por lo que otorgo mi consentimiento para que mis datos
                        personales sean tratados conforme a lo señalado en el presente Aviso de Privacidad.
                        <br />
                        <br />
                        Se entenderá que el titular consiente tácitamente el tratamiento de sus datos, cuando habiéndose
                        puesto a su disposición el aviso de privacidad, no manifieste su oposición.
                        <br />
                        <br />
                    </p>
                    <p className='text-p text-center '>
                        Atentamente:
                        <br />
                        <br />
                        <strong> DIAGNOSTICO BIOMOLECULAR S.A. DE C.V.</strong> <br />
                        <strong className='text-pantone-3'>
                            Avenida José Pages Llergo, Núm. 150, Colonia Arboledas,
                            <br />
                            C.P. 86079 Villahermosa, Centro Tabasco.
                        </strong>
                        <br />
                        <strong> hola@bimo<span className='text-pantone'>.com.mx </span>| <span className='text-pantone-3'>Tel: 993 50002</span></strong>
                        <br />
                        <br />
                    </p>
                    <hr />
                    <p className='text-center text-p'>
                        <strong>
                            <span className='text-pantone'>Documento controlado, prohibida su reproducción parcial o total, por cualquier medio sin autorización de</span> bimo.
                        </strong>
                    </p>
                </div>
            </section>
        </>
    )
}


export default Politica