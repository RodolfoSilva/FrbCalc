# DeVry Calc

Calculadora de notas para alunos da DeVry.

# Configurando o Ambiente

* Clone este repositório
* Na pasta do repositório (que foi clonada), instale o Cordova e o Ionic:
  <code>npm install -g cordova</code> para o Cordova
  <code>npm install -g ionic</code> para o Ionic
* Instale os pacotes do npm com o comando <code>npm install</code> 

# Rodando o DeVry Calc

* Para reproduzir o app localmente, digite <code>ionic serve</code>

# Compilando (WIP)
Para compilar a aplicação, é necessário definir qual plataforma será  direcionada. Temos duas opções: Android e iOS. Os dois possuem comandos semelhantes.

### Adicionando a plataforma
* Para Android: <code>ionic platform add android</code>
* Para iOS <code>ionic platform add ios</code>

### Compilando a build
* Para Android: <code>cordova build --release android</code>
* Para iOS: <code>cordova build --release ios</code>

### Gerando o .apk 
* Execute: <code>ionic run android --device</code>
Você encontrará o apk em: <pre>platforms/android/build/output/*.apk</pre>

## Android

https://play.google.com/store/apps/details?id=com.rodolfosilva.devrycalc


