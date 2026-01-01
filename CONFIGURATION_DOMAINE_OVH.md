# Configuration du domaine personnalisé OVH pour GitHub Pages

1. Sur OVH, allez dans la gestion DNS de votre domaine auxptitsoinscoiffure.fr.
2. Ajoutez/modifiez un enregistrement CNAME :
   - Nom : www
   - Cible : Benitoow.github.io.
   (Le point final est important)
3. Pour le domaine racine (auxptitsoinscoiffure.fr), ajoutez un enregistrement de type A pointant vers l’IP GitHub Pages :
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
4. Gardez le fichier CNAME à la racine du dépôt avec :
   auxptitsoinscoiffure.fr
5. Dans les paramètres GitHub Pages, indiquez le domaine personnalisé : auxptitsoinscoiffure.fr

La propagation DNS peut prendre quelques heures.
