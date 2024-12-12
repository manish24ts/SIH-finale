const wordList = [
    {
      word: "preamble",
      hint: "The introductory part of the Indian Constitution that sets out the purpose and objectives of the document."
    },
    {
      word: "parliament",
      hint: "The supreme legislative body of India, comprising the President and the two Houses of Parliament."
    },
    {
      word: "federalism",
      hint: "The system of government in which power is divided between the Centre and the States."
    },
    {
      word: "secularism",
      hint: "The principle of separating religion from the State, as enshrined in the Indian Constitution."
    },
    {
      word: "democracy",
      hint: "The system of government in which power is vested in the people, either directly or through elected representatives."
    },
    {
      word: "republic",
      hint: "A system of government in which the head of state is elected, rather than being a monarch."
    },
    {
      word: "judicial",
      hint: "The power of the judiciary to review and strike down laws and government actions that are unconstitutional."
    },
    {
      word: "impeachment",
      hint: "The process of removing a public official, such as the President or a judge, from office for misconduct or other serious offenses."
    },
    {
      word: "minorities",
      hint: "Communities that are recognized as being numerically smaller than the majority community and are entitled to special protections and benefits."
    },
    {
      word: "humanrights",
      hint: "The basic rights and freedoms that are inherent to all human beings, as recognized by international law and the Indian Constitution."
    },
    {
      word: "naturaljustice",
      hint: "The principle of fairness and impartiality in decision-making, particularly in relation to administrative and judicial proceedings."
    },
    {
      word: "citizenship",
      hint: "The status of being a citizen of a country, with the rights and responsibilities that come with it."
    },
    {
      word: "legislature",
      hint: "The branch of government that makes laws, including the Parliament and state legislatures."
    },
    {
      word: "executive",
      hint: "The branch of government that enforces laws, including the President, Prime Minister, and state governments."
    },
    {
      word: "judiciary",
      hint: "The branch of government that interprets laws, including the Supreme Court and high courts."
    },
    {
      word: "federation",
      hint: "A system of government in which power is divided between a central authority and constituent units, such as states or provinces."
    },
    {
      word: "constitution",
      hint: "The fundamental law of a country, which sets out the principles and structure of government."
    },
    {
      word: "amendment",
      hint: "A change made to a law or document, such as the Constitution."
    },
    {
      word: "referendum",
      hint: "A vote by the people on a particular issue, such as a constitutional amendment."
    },
    {
      word: "petition",
      hint: "A formal request made to a court or other authority, seeking a specific action or remedy."
    },
    {
      word: "ordinance",
      hint: "A law or regulation made by a government, particularly a state or local government."
    },
    {
      word: "statute",
      hint: "A law made by a government, particularly a federal or state government."
    },
    {
      word: "treaty",
      hint: "An agreement between two or more countries, particularly a formal agreement on a specific issue."
    },
    {
      word: "accord",
      hint: "An agreement or understanding between two or more parties, particularly a formal agreement."
    },
    {
      word: "compact",
      hint: "An agreement or treaty between two or more parties, particularly a formal agreement."
    },
    {
      word: "covenant",
      hint: "A formal agreement or promise, particularly a promise made by a government or organization."
    },
    {
      word: "pact",
      hint: "An agreement or treaty between two or more parties, particularly a formal agreement."
    },
    {
      word: "protocol",
      hint: "A formal agreement or set of rules, particularly a set of rules for diplomatic or official interactions."
    },
    {
      word: "regulation",
      hint: "A rule or law made by a government, particularly a federal or state government."
    },
    {
      word: "resolution",
      hint: "A formal decision or statement made by a government or organization, particularly a decision made by a legislative body."
    },
    {
      word: "ordinance",
      hint: "A law or regulation made by a government, particularly a state or local government."
    },
    {
      word: "autonomy",
      hint: "The state of being self-governing or independent, particularly in relation to a country or region."
    },
    {
      word: "bureaucracy",
      hint: "A system of government in which power is exercised by a large number of officials, particularly in a hierarchical structure."
    },
    {
      word: "centralization",
      hint: "The process of concentrating power or authority in a central government or organization."
    },
    {
      word: "decentralization",
      hint: "The process of dispersing power or authority to local governments or organizations."
    },
    {
      word: "democratization",
      hint: "The process of making a country or organization more democratic, particularly by increasing participation and representation."
    },
    {
      word: "federalization",
      hint: "The process of creating a federal system of government, particularly by dividing power between a central authority and constituent units."
    },
    {
      word: "globalization",
      hint: "The process of increasing global interconnectedness, particularly in relation to economics, politics, and culture."
    },
    {
      word: "governance",
      hint: "The system or process of governing, particularly in relation to a country, organization, or institution."
    },
    {
      word: "hierarchy",
      hint: "A system of organization in which power or authority is exercised by a series of levels or ranks."
    },
    {
      word: "institution",
      hint: "A established organization or system, particularly one that is dedicated to a specific purpose or function."
    },
    {
      word: "jurisdiction",
      hint: "The power or authority to make decisions or take action, particularly in relation to a specific geographic area or subject matter."
    },
    {
      word: "legitimacy",
      hint: "The state of being legitimate or lawful, particularly in relation to a government or organization."
    },
    {
      word: "liberalization",
      hint: "The process of making a country or organization more liberal, particularly by increasing individual freedoms and reducing government control."
    },
    {
      word: "mandate",
      hint: "A formal authorization or instruction, particularly one that is given by a government or organization."
    },
    {
      word: "monopoly",
      hint: "A situation in which a single organization or individual has complete control over a particular market or industry."
    },
    {
      word: "nationalism",
      hint: "A feeling of loyalty or devotion to a particular country or nation, particularly one that is characterized by a sense of shared identity or culture."
    },
    {
      word: "oligarchy",
      hint: "A system of government in which power is exercised by a small group of individuals, particularly one that is characterized by a lack of accountability or representation."
    },
    {
      word: "parliamentarianism",
      hint: "A system of government in which power is exercised by a parliament or legislative body, particularly one that is characterized by a strong emphasis on representation and accountability."
    },
    {
      word: "pluralism",
      hint: "A system or philosophy that emphasizes the importance of diversity and multiplicity, particularly in relation to politics, culture, or society."
    },
    {
      word: "privatization",
      hint: "The process of transferring ownership or control of a particular asset or industry from the public sector to the private sector."
    },
    {
      word: "proportionalrepresentation",
      hint: "A system of representation in which the number of seats or representatives is proportional to the number of votes or supporters."
    },
    {
      word: "publicadministration",
      hint: "The implementation of government policy, particularly through the use of bureaucratic or administrative systems."
    },
    {
      word: "publicpolicy",
      hint: "A course of action or decision made by a government or organization, particularly one that is intended to address a specific problem or issue."
    },
    {
      word: "regionalization",
      hint: "The process of dividing a country or organization into smaller regions or areas, particularly for administrative or economic purposes."
    },
    {
      word: "representation",
      hint: "The act of representing or speaking on behalf of a particular group or individual, particularly in a political or official context."
    },
    {
      word: "secession",
      hint: "The act of withdrawing or separating from a larger organization or country, particularly in order to form a new and independent entity."
    },
    {
      word: "sovereignty",
      hint: "The state of being supreme or independent, particularly in relation to a country or organization."
    },
    {
      word: "subsidy",
      hint: "A payment or grant made by a government or organization, particularly in order to support or encourage a particular activity or industry."
    },
    {
      word: "tariff",
      hint: "A tax or duty imposed on imported goods, particularly in order to protect domestic industries or raise revenue."
    },
    {
      word: "taxation",
      hint: "The process of imposing taxes or levies on individuals or organizations, particularly in order to raise revenue or fund public goods and services."
    },
    {
      word: "unification",
      hint: "The process of bringing together or uniting different groups or organizations, particularly in order to form a single and cohesive entity."
    }
];