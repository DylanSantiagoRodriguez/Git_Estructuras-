https://youtu.be/tuz2uA3I2sI

video explicacion 

Presentación del Proyecto: Página Web de Personalización del Renault Sandero
Se uso typescript
Descripción del Proyecto
La Página Web de Personalización del Renault Sandero es una plataforma interactiva diseñada para permitir a los usuarios personalizar su coche Renault Sandero seleccionando diferentes colores y rines. La página web proporciona una interfaz fácil de usar donde los usuarios pueden visualizar sus elecciones en tiempo real y proceder a ordenar su coche personalizado. Los principales objetivos de este proyecto son mejorar la participación del usuario, proporcionar una experiencia de personalización fluida y agilizar el proceso de pedido.
Descripción General
El proyecto consta de dos páginas principales:
1.	Página Principal (index.html): Permite a los usuarios seleccionar colores y rines para el coche.
2.	Página de Compra (purchase.html): Muestra el resumen de las selecciones del usuario y recopila información de envío y pago.
Página Principal (index.html)
Características:
•	Personalización del Coche: Los usuarios pueden cambiar el color del coche y los rines haciendo clic en los respectivos botones.
•	Botón de Ordenar: El botón “Ordenar Ahora” se habilita solo cuando se han seleccionado tanto el color como los rines.
•	Deshacer/Rehacer Acciones: Los usuarios pueden deshacer y rehacer sus últimas acciones.
Funcionalidades Clave:
•	Cambiar Color del Coche: Esta función cambia la imagen del coche y actualiza el array de selecciones y la pila de deshacer. También limpia la pila de rehacer y actualiza los estilos de los botones y el estado del botón de ordenar.
•	Cambiar Rines: Esta función actualiza el array de selecciones y la pila de deshacer con los nuevos rines. También limpia la pila de rehacer y actualiza los estilos de los botones y el estado del botón de ordenar.
•	Deshacer Última Acción: Esta función deshace la última acción moviéndola de la pila de deshacer a la pila de rehacer y actualizando el array de selecciones. También actualiza los estilos de los botones y el estado del botón de ordenar.
•	Rehacer Última Acción: Esta función rehace la última acción deshecha moviéndola de la pila de rehacer a la pila de deshacer y actualizando el array de selecciones. También actualiza los estilos de los botones y el estado del botón de ordenar.
Página de Compra (purchase.html)
Características:
•	Resumen del Pedido: Muestra el color y los rines seleccionados por el usuario.
•	Validación del Formulario: Asegura que todos los campos requeridos estén completos antes de proceder.
•	Editar y Confirmar: Permite a los usuarios editar su información antes de la confirmación final.
Funcionalidades Clave:
•	Mostrar Resumen del Pedido: Esta función recupera las selecciones del almacenamiento local y muestra el último color y rines seleccionados en la sección de resumen del pedido.
•	Finalizar Compra: Esta función recopila la información de envío y pago del usuario, muestra un mensaje de confirmación y almacena los datos en el almacenamiento local. También oculta el formulario y muestra la sección de confirmación.
•	Editar Compra: Esta función permite al usuario volver y editar su información mostrando el formulario y ocultando la sección de confirmación.
•	Confirmar Compra: Esta función muestra un mensaje de confirmación final con las selecciones e información del usuario, y oculta los botones de confirmación y edición.
