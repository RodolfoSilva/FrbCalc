# Wyden Calc

[![GitHub issues](https://img.shields.io/github/issues/RodolfoSilva/WydenCalc.svg)](https://github.com/RodolfoSilva/WydenCalc/issues)
[![GitHub stars](https://img.shields.io/github/stars/RodolfoSilva/WydenCalc.svg)](https://github.com/RodolfoSilva/WydenCalc/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/RodolfoSilva/WydenCalc.svg)](https://github.com/RodolfoSilva/WydenCalc/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/RodolfoSilva/WydenCalc/master/LICENSE)
[![Build Status](https://travis-ci.org/RodolfoSilva/WydenCalc.svg?branch=master)](https://travis-ci.org/RodolfoSilva/WydenCalc)

Calculadora de notas para alunos da Wyden.

[<img src="https://play.google.com/intl/en_us/badges/images/generic/pt-br_badge_web_generic.png" alt="Disponível no Google Play" height="100">](https://play.google.com/store/apps/details?id=com.rodolfosilva.WydenCalc) 

# Configurando o Ambiente

* Clone este repositório
* Na pasta do repositório (que foi clonada), instale o Cordova e o Ionic:
  <code>npm install -g cordova</code> para o Cordova
  <code>npm install -g ionic</code> para o Ionic
* Instale os pacotes do npm com o comando <code>npm install</code> 

# Rodando o Wyden Calc

* Para reproduzir o app localmente, digite <code>ionic serve</code>

# Compilando (WIP)
Para compilar a aplicação, é necessário definir qual plataforma será  direcionada. Temos duas opções: Android e iOS. Os dois possuem comandos semelhantes.

### Adicionando a plataforma
* Para Android: <code>ionic platform add android</code>
* Para iOS <code>ionic platform add ios</code>

### Compilando a build
* Para Android: <code>ionic build android --release</code>
* Para iOS: <code>ionic build ios --release</code>

### Gerando o .apk 
* Execute: <code>ionic run android --device</code>
Você encontrará o apk em: <pre>platforms/android/build/output/*.apk</pre>

