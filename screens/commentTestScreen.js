import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import AdaptiveCard from 'react-native-adaptivecards';

const cardGap = 20;
const cardOverrideStyle = {
    image: {
        imageSize: {
            small: 32,
            medium: 64,
        }
    },
};

export default class CommentTestScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            messages: [{
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "version": "1.0",
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "ColumnSet",
                        "separator": true,
                        "columns": [
                            {
                                "type": "Column",
                                "width": 1,
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "horizontalAlignment": "right",
                                        "text": "OLDEST-NEWEST",
                                        "size": "small",
                                        "isSubtle": true
                                    }
                                ]
                            },
                                                        {
                                "type": "Column",
                                "width": "auto",
                                "items": [
                                    {
                                        "type": "Image",
                                        "url": "https://www.seekclipart.com/clipng/big/375-3758178_png-file-svg-sort-icon-png-clipart.png",
                                        "size": "small",
                                        "spacing": "none",
                                        "horizontalAlignment": "right"
                                    }
                                ]
                            },
                        ],
                        "selectAction": {
                            "type": "Action.Submit",
                            "title": "cool link",
                            "data": {
                                "x": 13
                              }
                          }
                    },
                ]
            },
            ]
          };
    }
    
    render() {
        console.log(this.state.messages[0]);
        return (
            <ScrollView style={{
                marginTop: 24,
                flex: 1,
            }}
                contentContainerStyle={{
                    padding: 10,
                    backgroundColor: 'white',
                }}>
                <AdaptiveCard adaptiveCard={this.state.messages[0]} onSubmit={this.onSubmit} onInfo={this.onInfo} onError={this.onError} onWarning={this.onWarning} onOpenUrl={this.onOpenUrl}/>
                {/* <AdaptiveCard adaptiveCard={this.state.messages[1]} onSubmit={this.onSubmit} onInfo={this.onInfo} onError={this.onError} onWarning={this.onWarning} onOpenUrl={this.onOpenUrl}/> */}
                {this.renderGap()}
                </ScrollView>
        );
    }

    renderGap() {
        return <View style={{ height: cardGap }} />;
    };

    onInfo = (data) => {
        console.log(data);
    }

    onWarning = (data) => {
        console.log(data);
    }

    onError = (error) => {
        console.log(error);
    }

    onSubmit = (data) => {
        console.log(data);
        return Promise.resolve(true);
    }

    onOpenUrl = (url, method, data) => {
        console.log(`OnOpenUrl >> ${method} >> ${url}`, data);
        return Promise.resolve(true);
    }

    onCallback = (url, data) => {
        console.log(url);
        console.log(data);
        return Promise.resolve(mockData.peopleSuggestion);
    }
}


