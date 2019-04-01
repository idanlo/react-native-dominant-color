
*NOTE: * This was forked from [hu9osaez](https://github.com/hu9osaez/react-native-dominant-color) to get support for promises
which he did not release 

# react-native-vibrant-color
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
Extract the dominant colors of an image (Just for Android).

## Getting started
`$ npm install react-native-vibrant-color --save`

### Mostly automatic installation
`$ react-native link react-native-vibrant-color`

### Manual installation

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.idanlo.rnvibrantcolor.RNVibrantColorPackage;` to the imports at the top of the file
  - Add `new RNVibrantColorPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-vibrant-color'
  	project(':react-native-vibrant-color').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-vibrant-color/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-vibrant-color')
  	```


## Usage
```javascript
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { colorsFromUrl } from 'react-native-vibrant-color';

const imageUrl = 'https://source.unsplash.com/random/800x600';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10
    }
});

class Example extends Component {
    constructor() {
        super();
        this.state = {
            color: '#ffffff',
        };
    }

    componentWillMount() {
        colorsFromUrl(imageUrl).then(colors => {
            self.setState({ color: colors.averageColor });
        });
    }

    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.state.color }]}>
                <Image style={styles.image} source={{ uri: imageUrl}} />
            </View>
        );
    }
}

```

## API
#### Methods
* `colorsFromUrl(imageUrl)`: Promise resolves an object with the prominent colors from the image. Object properties are `averageColor`, `dominantColor`,  `vibrantColor`, `darkVibrantColor` and `lightVibrantColor`. If some color doesn't exist will return `#CCCCCC`.