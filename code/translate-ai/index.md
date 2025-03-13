---
seoTitle: "GEDCOM File Format and FamilySearch"
title: "GEDCOM File Format and FamilySearch"
description: "Discover the history, significance, and structure of GEDCOM—the universal genealogy file format. Learn about its evolution, adoption of GEDCOM 7.0, gender representation, and how it powers platforms like FamilySearch."
date: 07 Feb 2025
author: Shakeel Faiz
url: /data/gedcom-file-format/
keywords: ['GEDCOM File Format','GEDCOM 7.0']
categories: ['Data']
---
**Last Updated**: 07 Feb, 2025

{{< figure align=center src="images/gedcom-and-familysearch.webp" alt="Title - GEDCOM File Format and FamilySearch">}}

## **What is GEDCOM?**
[GEDCOM][1] (**Genealogical Data Communication**) is an **open file format** designed for **storing, exchanging, and sharing genealogical data** (family tree information). It is widely used in genealogy software and websites, making it easier to **transfer** family tree data between different platforms.

{{< figure align=center src="images/gedcom-info.png" alt="Illustration - GEDCOM File Format and FamilySearch">}}

## **Who Developed GEDCOM?**
GEDCOM was created by **The Church of Jesus Christ of Latter-day Saints (LDS Church)**, which operates **FamilySearch**—a major genealogy research organization. Their goal was to simplify genealogy data management and allow better **research collaboration**.

## **How Does GEDCOM Work?**
- GEDCOM files are **plain text files** (now using **UTF-8 encoding** as of version 7.0).
- They contain **information about individuals**, such as:
  - **Names**
  - **Birth and death dates**
  - **Family relationships** (parents, children, spouses)
  - **Events** (marriage, immigration, etc.)
- These records are **linked** using metadata, ensuring proper connections between family members.

## **GEDCOM Versions & Industry Standards**
- The latest official version is [**GEDCOM 7.0**][1], released in **2021**.
- However, [**GEDCOM 5.5.1**][2] (from 1999, finalized in 2019)** remains the **most widely used standard**.
- Because GEDCOM 5.5.1 had limitations, some genealogy software developers created **custom extensions** like **GEDCOM 5.5 EL (Extended Locations)** to improve it.

## **Adoption of GEDCOM 7.0**
- [**FamilySearch**][3] planned to support GEDCOM 7.0 by **Q3 2022**.
- [**Ancestry.com**][4] has also shown interest in adopting it but has not provided a firm implementation date.

## **Why is GEDCOM Important?**
1. **Cross-Platform Compatibility** – Allows users to move their family tree data between different genealogy websites and software.
2. **Long-Term Data Storage** – Ensures genealogical data remains accessible in a standardized format.
3. **Genealogy Collaboration** – Enables researchers and family historians to share and merge data efficiently.

## **Explanation of the GEDCOM Data Model**  

GEDCOM uses a **lineage-linked data model** to organize **family relationships** in a structured way. It is based on the **nuclear family** concept, meaning it records relationships in terms of **parents and children** rather than just individuals.  

### **Key Components of the GEDCOM Data Model**  
1. **INDI (Individual) Records**  
   - Each person in the genealogy file is stored as an **INDI** (individual) record.  
   - Every individual is assigned a **unique ID number** to ensure proper linking in the file.  

2. **FAM (Family) Records**  
   - Family records (FAM) serve as the **linking structure** between individuals.  
   - A FAM record assigns:  
     - **HUSB** (husband) – The father in the family.  
     - **WIFE** (wife) – The mother in the family.  
     - **CHIL** (child) – The children of the couple.  
   - These labels are **historical** and based on the original GEDCOM model but are still used today.  

{{< figure align=center src="images/explanation-of-the-gedcom-data-model.png" alt="Illustration - Explanation of the GEDCOM Data Model">}}

### **Evolution of Gender Representation in GEDCOM**  
- Initially, the GEDCOM model was designed assuming a **heteronormative family structure**, where a **male (HUSB) and female (WIFE) have children (CHIL)**.  
- The [**GEDCOM 7.0 specification**][1] clarifies that these terms **do not** imply gender roles or biological parenthood.  
- The updated specification allows for:  
  - **Same-sex couples**  
  - **Adoption, fostering, and cohabitation**  
  - **More flexible family structures**  
- The terms **'partners', 'parents', or 'spouses'** are now preferred when referring to individuals in a FAM record.  

{{< figure align=center src="images/evolution-of-gender-representation-in-gedcom.png" alt="Illustration - Explanation of the GEDCOM Data Model">}}

### **Why Is This Important?**  
1. **Maintains Structured Relationships** – Ensures each person is correctly linked to parents, spouses, and children.  
2. **Improves Compatibility** – Allows genealogy software to recognize and organize family data efficiently.  
3. **Increases Inclusivity** – Supports diverse family structures without assuming traditional gender roles.  

---
## **Explanation of the Structure of a GEDCOM File**

A **GEDCOM file** consists of **three main sections**: the **header**, the **records**, and the **trailer**. Each section plays a specific role in organizing genealogical data, and the structure of the file is highly organized to ensure that relationships between individuals and families are clear and standardized.

### **1. Header Section**  
- The **header section** marks the start of the GEDCOM file and includes important **metadata** about the file itself, such as its version (e.g., [GEDCOM 7.0][1]) and any special settings or configurations for the file.  
- This section is represented by the **HEAD** record.

### **2. Records Section**  
This is the main part of the GEDCOM file and consists of several different record types, each serving a specific purpose:  

- **INDI (Individual Record):** Represents an individual person in the family tree.  
- **FAM (Family Record):** Represents a family, linking a husband, wife, and children.  
- **SOUR (Source Record):** Contains information about the sources used to support the data, such as historical records.  
- **OBJE (Object Record):** Represents multimedia objects, like photos or documents, associated with individuals or families.  
- **NOTE (Note Record):** Contains additional notes or comments that can provide extra context or explanations for a record.  
- **REPO (Repository Record):** Describes a place where genealogical information is stored, like a library or archive.  
- **SUBM (Submitter Record):** Represents the person or entity submitting the GEDCOM file.

Each of these records is structured hierarchically, with different **level numbers** indicating how the data is related. For instance:  
- **Level 0** is the **top level** for the most significant records, like **HEAD, TRLR, INDI, FAM, SOUR**, etc.
- **Level 1 or higher** represents sub-level records, like events or relationships tied to a specific individual or family.

### **3. Trailer Section**  
- The **trailer section** marks the end of the GEDCOM file and contains the **TRLR** record. It signifies that the file has concluded.

{{< figure align=center src="images/explanation-of-the-structure-of-a-gedcom-file.png" alt="Illustration - Explanation of the Structure of a GEDCOM File">}}

### **How It Works in Practice**
- **Level Numbers:** Every line in a GEDCOM file begins with a level number (e.g., 0, 1, 2), where **0** represents top-level records, and positive integers (1, 2, etc.) represent nested or subordinate records. This system ensures that relationships and hierarchies within the family tree are properly organized.
  
  For example:  
  - **Level 0**: HEAD (Header Record), TRLR (Trailer Record), INDI (Individual Record)
  - **Level 1**: MARR (Marriage Event), BIRT (Birth Event)
  - **Level 2**: DATE (Date of the event), PLAC (Place of the event)
  
- **Handwriting a GEDCOM file** is technically possible, but it’s **not human-friendly** due to its structured nature. It’s much easier to use software designed to work with GEDCOM files, which helps organize and format data correctly.

### **Validation and Quality Control**
- Since GEDCOM files need to be well-structured for proper use and transfer, there are tools to **validate** them for errors.
  - [**PhpGedView Project**][5]: Includes a GEDCOM validator for checking the structure.
  - [**The Windows GEDCOM Validator**][6]: A standalone tool for GEDCOM validation.
  - **Gedcheck**: The older validation tool, previously used by the LDS Church.

### **Challenges with GEDCOM Compatibility**  
- In the early 2000s, the **GEDCOM TestBook Project** evaluated how well different genealogy software complied with the **GEDCOM 5.5 standard**. The results revealed several issues, such as data loss or improper reading of the **NOTE tag**, which can appear at multiple levels.
  
- **GEDCOM 7.0** aims to address some of these issues, and **validation tools** for this newer standard exist to help ensure compatibility across different platforms.

### **Why is GEDCOM Validation Important?**
- Ensures that **data is structured correctly** and that relationships between individuals, families, events, and sources are maintained properly.
- Helps avoid **data loss** when transferring files between genealogy programs.
- Makes it easier for genealogists to **share information** across different platforms.

---
## Example GEDCOM File

Here's a simple example of a **GEDCOM file** and an explanation of its structure:

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

### Breakdown and Explanation:

#### 1. **Header Section (HEAD)**
```
0 HEAD
1 SOUR FamilySearch GEDCOM
2 VERS 7.0
2 NAME FamilySearch
1 DEST Ancestry
1 DATE 5 FEB 2025
1 SUBM @SUBM1@
```
- **0 HEAD**: Marks the start of the file.
- **1 SOUR**: Indicates the source of the file (e.g., FamilySearch GEDCOM).
- **2 VERS 7.0**: Specifies the version of the GEDCOM format used (7.0 here).
- **1 DEST**: Indicates the intended destination or system for the data (e.g., Ancestry).
- **1 DATE**: The date the GEDCOM file was created (e.g., 5th February 2025).
- **1 SUBM**: Points to the **submitter record** (@SUBM1@), which would have more information about the person submitting the file.

#### 2. **Individual Records (INDI)**  
```
0 INDI @I1@
1 NAME John /Doe/
1 SEX M
1 BIRT
2 DATE 1 JAN 1800
2 PLAC New York, USA
```
- **0 INDI @I1@**: Marks the start of an individual record with a unique ID (@I1@) for John Doe.
- **1 NAME John /Doe/**: The name of the individual (John Doe).
- **1 SEX M**: Gender of the individual (M for Male).
- **1 BIRT**: Indicates the individual’s birth event.
  - **2 DATE 1 JAN 1800**: The birth date (1st January 1800).
  - **2 PLAC New York, USA**: The place of birth (New York, USA).

#### 3. **Family Record (FAM)**  
```
0 FAM @F1@
1 HUSB @I1@
1 WIFE @I2@
1 CHIL @I3@
```
- **0 FAM @F1@**: Marks the start of a family record with a unique ID (@F1@).
- **1 HUSB @I1@**: Links the husband (John Doe, ID @I1@).
- **1 WIFE @I2@**: Links the wife (Jane Smith, ID @I2@).
- **1 CHIL @I3@**: Links the child (Mary Doe, ID @I3@).

#### 4. **Second Individual Record (INDI)**  
```
0 INDI @I2@
1 NAME Jane /Smith/
1 SEX F
1 BIRT
2 DATE 15 FEB 1805
2 PLAC Boston, USA
```
- **0 INDI @I2@**: Marks the start of Jane Smith’s individual record with a unique ID (@I2@).
- **1 NAME Jane /Smith/**: The name of the individual (Jane Smith).
- **1 SEX F**: Gender of the individual (F for Female).
- **1 BIRT**: Indicates the individual’s birth event.
  - **2 DATE 15 FEB 1805**: The birth date (15th February 1805).
  - **2 PLAC Boston, USA**: The place of birth (Boston, USA).

#### 5. **Third Individual Record (INDI)**
```
0 INDI @I3@
1 NAME Mary /Doe/
1 SEX F
1 BIRT
2 DATE 10 OCT 1825
2 PLAC New York, USA
```
- **0 INDI @I3@**: Marks the start of Mary Doe’s individual record with a unique ID (@I3@).
- **1 NAME Mary /Doe/**: The name of the individual (Mary Doe).
- **1 SEX F**: Gender of the individual (F for Female).
- **1 BIRT**: Indicates the individual’s birth event.
  - **2 DATE 10 OCT 1825**: The birth date (10th October 1825).
  - **2 PLAC New York, USA**: The place of birth (New York, USA).

#### 6. **Trailer Section (TRLR)**
```
0 TRLR
```
- **0 TRLR**: Marks the end of the GEDCOM file.

### **Explanation of the Key Records**
- **INDI (Individual) Records**: These contain personal details about a specific individual, like name, gender, and birth date.
- **FAM (Family) Record**: This links individuals to form family units. It connects **parents (HUSB and WIFE)** and **children (CHIL)** using their **unique IDs**.
- **Note about IDs**: Each record (individual or family) has a unique ID assigned to it (e.g., `@I1@` for John Doe). These IDs are used to link related records, such as linking a child to their parents.

### **Key Concepts**
- **Level Numbers**: GEDCOM files use **level numbers** to organize data in a hierarchical structure. **Level 0** is for top-level records (like INDI, FAM), and **Level 1 and 2** are used for sub-level details (like events and places).
- **Names in Slashes**: Names in GEDCOM are often enclosed in slashes, such as **John /Doe/**, which differentiates the surname from the given name.

{{< figure align=center src="images/gedcom-explanation-of-the-key-records.png" alt="Illustration - GEDCOM - Explanation of the Key Records">}}

This is a basic GEDCOM file, but more complex files can include detailed events (like marriages, deaths), sources (e.g., census records), and multimedia references.



## Conclusion

GEDCOM has been a cornerstone in the field of genealogy, enabling the exchange of genealogical data across different software platforms. Its standardized format has allowed researchers, historians, and hobbyists to share and preserve family history data efficiently. However, despite its widespread adoption, GEDCOM is not without limitations. Issues such as compatibility between software, the inability to represent complex relationships, and the lack of support for modern data types highlight the need for ongoing improvements or alternative solutions.

As genealogy continues to evolve with advancements in technology, the future of GEDCOM may involve updates to the standard or the development of new formats that better accommodate the complexities of modern genealogical research. For now, GEDCOM remains an essential tool for anyone working with family trees, and understanding its structure and functionality is crucial for effective data management and sharing in the genealogy community.

[1]: https://gedcom.io/specifications/FamilySearchGEDCOMv7.html
[2]: https://gedcom.io/specifications/ged551.pdf
[3]: https://www.familysearch.org/en/gedcom/
[4]: https://www.ancestry.com/
[5]: http://www.phpgedview.net/
[6]: https://chronoplexsoftware.com/gedcomvalidator/