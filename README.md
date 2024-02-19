L'objectif de cette deuxieme phase du projet et de consommer le backend du projet S3CUR1TY, L'application Angular doit intégrer les mécanismes de sécurité fournis par Spring Security, notamment l'utilisation de guards, intercepteurs et resolvers.

​

## Fonctionnalités Requises

​

## Authentification et Autorisation:

Les utilisateurs doivent pouvoir s'authentifier. Les utilisateurs doivent être redirigés vers une page de connexion si l'authentification échoue. L'accès à certaines fonctionnalités de l'application doit être restreint en fonction des rôles et autorités définis dans Spring Security.

​

## Gestion des Rôles:

Afficher les fonctionnalités disponibles en fonction des rôles de l'utilisateur. Les utilisateurs avec des rôles spécifiques doivent avoir accès à des fonctionnalités correspondantes.

​

## Utilisation des Guards:

Utiliser des guards pour protéger les routes de l'application en fonction des rôles et des autorisations de l'utilisateur. Rediriger les utilisateurs non authentifiés vers la page de connexion. Restreindre l'accès aux routes en fonction des rôles et des autorisations.

​

## Intercepteurs:

Utiliser des intercepteurs pour gérer les requêtes HTTP sortantes. Ajouter les en-têtes d'authentification nécessaires aux requêtes sortantes. Intercepter les réponses HTTP pour gérer les erreurs d'authentification ou d'autorisation.

​

## Resolvers:

Utiliser des resolvers pour pré-charger les données nécessaires avant d'activer une route. Les resolvers doivent vérifier l'authentification et l'autorisation de l'utilisateur avant de charger les données.
