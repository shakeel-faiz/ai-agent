---
seoTitle: "Formato de Archivo GEDCOM y FamilySearch"
title: "Formato de Archivo GEDCOM y FamilySearch"
description: "Descubre la historia, el significado y la estructura de GEDCOM—el formato de archivo universal de genealogía. Aprende sobre su evolución, la adopción de GEDCOM 7.0, la representación de género, y cómo impulsa plataformas como FamilySearch."
date: 07 Feb 2025
author: Shakeel Faiz
url: /data/formato-de-archivo-gedcom/
keywords: ['Formato de Archivo GEDCOM','GEDCOM 7.0']
categories: ['Datos']
---
**Última Actualización**: 07 Feb, 2025

{{< figure align=center src="images/gedcom-and-familysearch.webp" alt="Título - Formato de Archivo GEDCOM y FamilySearch">}}

## **¿Qué es GEDCOM?**
[GEDCOM][1] (**Genealogical Data Communication**) es un **formato de archivo abierto** diseñado para **almacenar, intercambiar y compartir datos genealógicos** (información sobre el árbol genealógico). Se utiliza ampliamente en software y sitios web de genealogía, facilitando la **transferencia** de datos de árboles genealógicos entre diferentes plataformas.

{{< figure align=center src="images/gedcom-info.png" alt="Ilustración - Formato de Archivo GEDCOM y FamilySearch">}}

## **¿Quién Desarrolló GEDCOM?**
GEDCOM fue creado por **La Iglesia de Jesucristo de los Santos de los Últimos Días (Iglesia SUD)**, que opera **FamilySearch**—una importante organización de investigación genealógica. Su objetivo era simplificar la gestión de datos genealógicos y permitir una mejor **colaboración en la investigación**.

## **¿Cómo Funciona GEDCOM?**
- Los archivos GEDCOM son **archivos de texto plano** (utilizando ahora **codificación UTF-8** desde la versión 7.0).
- Contienen **información sobre individuos**, como:
  - **Nombres**
  - **Fechas de nacimiento y defunción**
  - **Relaciones familiares** (padres, hijos, cónyuges)
  - **Eventos** (matrimonio, inmigración, etc.)
- Estos registros están **vinculados** mediante metadatos, asegurando conexiones adecuadas entre los miembros de la familia.

## **Versiones GEDCOM y Estándares de la Industria**
- La última versión oficial es [**GEDCOM 7.0**][1], lanzada en **2021**.
- Sin embargo, [**GEDCOM 5.5.1**][2] (de 1999, finalizada en 2019)** sigue siendo el **estándar más utilizado**.
- Debido a las limitaciones de GEDCOM 5.5.1, algunos desarrolladores de software de genealogía crearon **extensiones personalizadas** como **GEDCOM 5.5 EL (Extended Locations)** para mejorarlo.

## **Adopción de GEDCOM 7.0**
- [**FamilySearch**][3] planeaba soportar GEDCOM 7.0 para el **T3 de 2022**.
- [**Ancestry.com**][4] también ha mostrado interés en adoptarlo pero no ha proporcionado una fecha de implementación firme.

## **¿Por Qué es Importante GEDCOM?**
1. **Compatibilidad entre Plataformas** – Permite a los usuarios mover sus datos de árboles genealógicos entre diferentes sitios web y programas de genealogía.
2. **Almacenamiento de Datos a Largo Plazo** – Asegura que los datos genealógicos permanezcan accesibles en un formato normalizado.
3. **Colaboración en Genealogía** – Facilita la compartición y fusión de datos entre investigadores e historiadores familiares.

## **Explicación del Modelo de Datos GEDCOM**  

GEDCOM utiliza un **modelo de datos vinculados a linajes** para organizar **relaciones familiares** de manera estructurada. Está basado en el concepto de **familia nuclear**, lo que significa que registra relaciones en términos de **padres e hijos** en lugar de solo individuos.  

### **Componentes Clave del Modelo de Datos GEDCOM**  
1. **Registros INDI (Individuales)**  
   - Cada persona en el archivo de genealogía se almacena como un registro **INDI** (individual).  
   - A cada individuo se le asigna un **número de identificación único** para asegurar un enlace correcto en el archivo.  

2. **Registros FAM (Familiares)**  
   - Los registros familiares (FAM) sirven como la **estructura de vinculación** entre individuos.  
   - Un registro FAM asigna:  
     - **HUSB** (esposo) – El padre en la familia.  
     - **WIFE** (esposa) – La madre en la familia.  
     - **CHIL** (hijo) – Los hijos de la pareja.  
   - Estas etiquetas son **históricas** y basadas en el modelo original de GEDCOM pero todavía se usan hoy en día.  

{{< figure align=center src="images/explanation-of-the-gedcom-data-model.png" alt="Ilustración - Explicación del Modelo de Datos GEDCOM">}}

### **Evolución de la Representación de Género en GEDCOM**  
- Inicialmente, el modelo GEDCOM fue diseñado asumiendo una estructura familiar **heteronormativa**, donde un **hombre (HUSB) y una mujer (WIFE) tienen hijos (CHIL)**.  
- La [**especificación GEDCOM 7.0**][1] aclara que estos términos **no** implican roles de género ni parentesco biológico.  
- La especificación actualizada permite:  
  - **Parejas del mismo sexo**  
  - **Adopción, acogimiento, y convivencia**  
  - **Estructuras familiares más flexibles**  
- Los términos **'parejas', 'padres', o 'cónyuges'** son ahora preferidos al referirse a individuos en un registro FAM.  

{{< figure align=center src="images/evolution-of-gender-representation-in-gedcom.png" alt="Ilustración - Evolución de la Representación de Género en GEDCOM">}}

### **¿Por Qué es Esto Importante?**  
1. **Mantiene Relaciones Estructuradas** – Asegura que cada persona esté correctamente vinculada a padres, cónyuges e hijos.  
2. **Mejora la Compatibilidad** – Permite que el software de genealogía reconozca y organice los datos del árbol genealógico eficientemente.  
3. **Aumenta la Inclusividad** – Soporta diversas estructuras familiares sin asumir roles de género tradicionales.  

---
## **Explicación de la Estructura de un Archivo GEDCOM**

Un **archivo GEDCOM** consta de **tres secciones principales**: el **encabezado**, los **registros**, y el **cierre**. Cada sección desempeña un papel específico en la organización de los datos genealógicos, y la estructura del archivo está altamente organizada para asegurar que las relaciones entre individuos y familias sean claras y estén normalizadas.

### **1. Sección de Encabezado**  
- La **sección de encabezado** marca el inicio del archivo GEDCOM e incluye **metadatos** importantes sobre el archivo mismo, como su versión (por ejemplo, [GEDCOM 7.0][1]) y cualquier configuración o ajuste especial para el archivo.  
- Esta sección está representada por el registro **HEAD**.

### **2. Sección de Registros**  
Esta es la parte principal del archivo GEDCOM y consta de varios tipos de registros, cada uno con un propósito específico:  

- **INDI (Registro Individual):** Representa a una persona en el árbol genealógico.  
- **FAM (Registro Familiar):** Representa una familia, vinculando a un esposo, esposa e hijos.  
- **SOUR (Registro de Fuente):** Contiene información sobre las fuentes utilizadas para respaldar los datos, como registros históricos.  
- **OBJE (Registro de Objeto):** Representa objetos multimedia, como fotos o documentos asociados con individuos o familias.  
- **NOTE (Registro de Nota):** Contiene notas o comentarios adicionales que pueden proporcionar contexto o explicaciones adicionales para un registro.  
- **REPO (Registro de Repositorio):** Describe un lugar donde la información genealógica se almacena, como una biblioteca o archivo.  
- **SUBM (Registro de Remitente):** Representa la persona o entidad que envía el archivo GEDCOM.

Cada uno de estos registros está estructurado de forma jerárquica, con diferentes **números de nivel** que indican cómo están relacionados los datos. Por ejemplo:  
- **Nivel 0** es el **nivel superior** para los registros más significativos, como **HEAD, TRLR, INDI, FAM, SOUR**, etc.
- **Nivel 1 o superior** representa registros de subnivel, como eventos o relaciones vinculadas a un individuo o familia específica.

### **3. Sección de Cierre**  
- La **sección de cierre** marca el final del archivo GEDCOM y contiene el registro **TRLR**. Significa que el archivo ha concluido.

{{< figure align=center src="images/explanation-of-the-structure-of-a-gedcom-file.png" alt="Ilustración - Explicación de la Estructura de un Archivo GEDCOM">}}

### **¿Cómo Funciona en la Práctica?**
- **Números de Nivel:** Cada línea en un archivo GEDCOM comienza con un número de nivel (por ejemplo, 0, 1, 2), donde **0** representa registros de nivel superior y números enteros positivos (1, 2, etc.) representan registros anidados o subordinados. Este sistema asegura que las relaciones y jerarquías dentro del árbol genealógico estén correctamente organizadas.
  
  Por ejemplo:  
  - **Nivel 0**: HEAD (Registro de Encabezado), TRLR (Registro de Cierre), INDI (Registro Individual)
  - **Nivel 1**: MARR (Evento de Matrimonio), BIRT (Evento de Nacimiento)
  - **Nivel 2**: DATE (Fecha del evento), PLAC (Lugar del evento)
  
- **Escribir a Mano un Archivo GEDCOM** es técnicamente posible, pero **no es amigable para humanos** debido a su naturaleza estructurada. Es mucho más fácil utilizar software diseñado para trabajar con archivos GEDCOM, lo que ayuda a organizar y formatear los datos correctamente.

### **Validación y Control de Calidad**
- Dado que los archivos GEDCOM necesitan estar bien estructurados para un uso y transferencia adecuados, existen herramientas para **validarlos** en busca de errores.
  - El [**Proyecto PhpGedView**][5]: Incluye un validador GEDCOM para verificar la estructura.
  - [**El Validador GEDCOM para Windows**][6]: Una herramienta autónoma para la validación de GEDCOM.
  - **Gedcheck**: La herramienta de validación más antigua, utilizada anteriormente por la Iglesia SUD.

### **Desafíos de la Compatibilidad con GEDCOM**  
- A comienzos de la década de 2000, el **Proyecto TestBook de GEDCOM** evaluó qué tan bien cumplía el software de genealogía con el **estándar GEDCOM 5.5**. Los resultados revelaron varios problemas, como pérdida de datos o la lectura inadecuada de la **etiqueta NOTE**, que puede aparecer en múltiples niveles.
  
- **GEDCOM 7.0** busca abordar algunos de estos problemas, y las **herramientas de validación** para este estándar más reciente existen para ayudar a asegurar la compatibilidad a través de diferentes plataformas.

### **¿Por Qué es Importante la Validación de GEDCOM?**
- Asegura que los **datos estén correctamente estructurados** y que se mantengan adecuadamente las relaciones entre individuos, familias, eventos y fuentes.
- Ayuda a evitar la **pérdida de datos** al transferir archivos entre programas de genealogía.
- Facilita que los genealogistas **compartan información** entre diferentes plataformas.

---
## Ejemplo de Archivo GEDCOM

Aquí tienes un sencillo ejemplo de un **archivo GEDCOM** y una explicación de su estructura:

```
0 HEAD
1 SOUR FamilySearch GEDCOM
2 VERS 7.0
2 NAME FamilySearch
1 DEST Ancestry
1 DATE 5 FEB 2025
1 SUBM @SUBM1@
0 INDI @I1@
1 NAME John /Doe/
1 SEX M
1 BIRT
2 DATE 1 JAN 1800
2 PLAC New York, USA
0 FAM @F1@
1 HUSB @I1@
1 WIFE @I2@
1 CHIL @I3@
0 INDI @I2@
1 NAME Jane /Smith/
1 SEX F
1 BIRT
2 DATE 15 FEB 1805
2 PLAC Boston, USA
0 INDI @I3@
1 NAME Mary /Doe/
1 SEX F
1 BIRT
2 DATE 10 OCT 1825
2 PLAC New York, USA
0 TRLR
```

### Desglose y Explicación:

#### 1. **Sección de Encabezado (HEAD)**
```
0 HEAD
1 SOUR FamilySearch GEDCOM
2 VERS 7.0
2 NAME FamilySearch
1 DEST Ancestry
1 DATE 5 FEB 2025
1 SUBM @SUBM1@
```
- **0 HEAD**: Marca el inicio del archivo.
- **1 SOUR**: Indica la fuente del archivo (por ejemplo, FamilySearch GEDCOM).
- **2 VERS 7.0**: Especifica la versión del formato GEDCOM usado (7.0 aquí).
- **1 DEST**: Indica el destino o sistema previsto para los datos (por ejemplo, Ancestry).
- **1 DATE**: La fecha en que se creó el archivo GEDCOM (por ejemplo, 5 de febrero de 2025).
- **1 SUBM**: Apunta al **registro de remitente** (@SUBM1@), que tendría más información sobre la persona que envía el archivo.

#### 2. **Registros Individuales (INDI)**  
```
0 INDI @I1@
1 NAME John /Doe/
1 SEX M
1 BIRT
2 DATE 1 JAN 1800
2 PLAC New York, USA
```
- **0 INDI @I1@**: Marca el inicio de un registro individual con un ID único (@I1@) para John Doe.
- **1 NAME John /Doe/**: El nombre del individuo (John Doe).
- **1 SEX M**: Sexo del individuo (M para Masculino).
- **1 BIRT**: Indica el evento de nacimiento del individuo.
  - **2 DATE 1 JAN 1800**: La fecha de nacimiento (1 de enero de 1800).
  - **2 PLAC New York, USA**: El lugar de nacimiento (Nueva York, EE.UU.).

#### 3. **Registro Familiar (FAM)**  
```
0 FAM @F1@
1 HUSB @I1@
1 WIFE @I2@
1 CHIL @I3@
```
- **0 FAM @F1@**: Marca el inicio de un registro familiar con un ID único (@F1@).
- **1 HUSB @I1@**: Vincula al esposo (John Doe, ID @I1@).
- **1 WIFE @I2@**: Vincula a la esposa (Jane Smith, ID @I2@).
- **1 CHIL @I3@**: Vincula a la hija (Mary Doe, ID @I3@).

#### 4. **Segundo Registro Individual (INDI)**  
```
0 INDI @I2@
1 NAME Jane /Smith/
1 SEX F
1 BIRT
2 DATE 15 FEB 1805
2 PLAC Boston, USA
```
- **0 INDI @I2@**: Marca el inicio del registro individual de Jane Smith con un ID único (@I2@).
- **1 NAME Jane /Smith/**: El nombre del individuo (Jane Smith).
- **1 SEX F**: Sexo del individuo (F para Femenino).
- **1 BIRT**: Indica el evento de nacimiento del individuo.
  - **2 DATE 15 FEB 1805**: La fecha de nacimiento (15 de febrero de 1805).
  - **2 PLAC Boston, EE.UU.**: El lugar de nacimiento (Boston, EE.UU.).

#### 5. **Tercer Registro Individual (INDI)**
```
0 INDI @I3@
1 NAME Mary /Doe/
1 SEX F
1 BIRT
2 DATE 10 OCT 1825
2 PLAC New York, USA
```
- **0 INDI @I3@**: Marca el inicio del registro individual de Mary Doe con un ID único (@I3@).
- **1 NAME Mary /Doe/**: El nombre del individuo (Mary Doe).
- **1 SEX F**: Sexo del individuo (F para Femenino).
- **1 BIRT**: Indica el evento de nacimiento del individuo.
  - **2 DATE 10 OCT 1825**: La fecha de nacimiento (10 de octubre de 1825).
  - **2 PLAC New York, EE.UU.**: El lugar de nacimiento (Nueva York, EE.UU.).

#### 6. **Sección de Cierre (TRLR)**
```
0 TRLR
```
- **0 TRLR**: Marca el final del archivo GEDCOM.

### **Explicación de los Registros Clave**
- **Registros INDI (Individuales)**: Estos contienen detalles personales sobre un individuo específico, como nombre, sexo, y fecha de nacimiento.
- **Registro FAM (Familiar)**: Este vincula a los individuos para formar unidades familiares. Conecta **padres (HUSB y WIFE)** e **hijos (CHIL)** usando sus **IDs únicos**.
- **Nota sobre IDs**: Cada registro (individual o familiar) tiene un ID único asignado (por ejemplo, `@I1@` para John Doe). Estos IDs se utilizan para vincular registros relacionados, como vincular un hijo a sus padres.

### **Conceptos Clave**
- **Números de Nivel**: Los archivos GEDCOM usan **números de nivel** para organizar los datos en una estructura jerárquica. **Nivel 0** es para registros de nivel superior (como INDI, FAM), y **Niveles 1 y 2** se utilizan para detalles de subnivel (como eventos y lugares).
- **Nombres entre Barras**: Los nombres en GEDCOM a menudo se encierran entre barras, como **John /Doe/**, lo que diferencia el apellido del nombre de pila.

{{< figure align=center src="images/gedcom-explanation-of-the-key-records.png" alt="Ilustración - GEDCOM - Explicación de los Registros Clave">}}

Este es un archivo GEDCOM básico, pero archivos más complejos pueden incluir eventos detallados (como matrimonios, defunciones), fuentes (ej., registros censales), y referencias multimedia.



## Conclusión

GEDCOM ha sido una piedra angular en el campo de la genealogía, permitiendo el intercambio de datos genealógicos entre diferentes plataformas de software. Su formato estandarizado ha permitido a investigadores, historiadores, y aficionados compartir y preservar datos de historia familiar de manera eficiente. Sin embargo, a pesar de su amplia adopción, GEDCOM no está exento de limitaciones. Problemas como la compatibilidad entre software, la incapacidad para representar relaciones complejas, y la falta de soporte para tipos de datos modernos resaltan la necesidad de mejoras continuas o soluciones alternativas.

A medida que la genealogía continúa evolucionando con los avances tecnológicos, el futuro de GEDCOM puede implicar actualizaciones al estándar o el desarrollo de nuevos formatos que mejor acomoden las complejidades de la investigación genealógica moderna. Por ahora, GEDCOM sigue siendo una herramienta esencial para cualquiera que trabaje con árboles genealógicos, y entender su estructura y funcionalidad es crucial para una gestión efectiva de datos y compartición en la comunidad genealógica.

[1]: https://gedcom.io/specifications/FamilySearchGEDCOMv7.html
[2]: https://gedcom.io/specifications/ged551.pdf
[3]: https://www.familysearch.org/en/gedcom/
[4]: https://www.ancestry.com/
[5]: http://www.phpgedview.net/
[6]: https://chronoplexsoftware.com/gedcomvalidator/