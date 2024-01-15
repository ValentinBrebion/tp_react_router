import React from 'react';

const AddReview = () => {
    return <form action="/traitement" method="post">
    <label for="champTexte">Auteur</label>
    <input type="text" id="auteur" name="auteur" required/>
    <label for="champTexte">titre</label>
    <input type="text" id="titre" name="titre" required/>
    <label for="champTexte">Auteur</label>
    <input type="text" id="champTexte" name="champTexte" required/>
    
    <label for="champNombre">Champ numérique :</label>
    <input type="number" id="champNombre" name="champNombre" required/>

    <input type="submit" value="Envoyer"/>
</form>
};

export default AddReview;