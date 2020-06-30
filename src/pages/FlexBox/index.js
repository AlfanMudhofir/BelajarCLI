import React, { Component, useEffect } from 'react';
import { Text, View, Image } from 'react-native';

// class FlexBox extends Component{
// 	constructor(props){
// 		super(props);
// 		console.log('==> Constructor');
// 		this.state = {
// 			text: 'Sampling deskripsi',
// 		}
// 	}

// 	componentDidMount(){
// 		console.log('==> Component Did Mount');
// 		this.setState({
// 			text: 'Update Sampling Description.',
// 		})
// 	}

// 	componentDidUpdate(){
// 		console.log('==> Component Did Update');
// 	}

// 	render(){
// 		console.log('==> Render');
// 		return(
// 			<View>
// 				<View style={{flexDirection: 'row', backgroundColor: '#c8d6e5', alignItems: 'center', justifyContent: 'space-between'}}>
// 					<View style={{backgroundColor: '#ee5253', width: 50, height:50}} />
// 					<View style={{backgroundColor: '#feca57', width: 50, height:50}} />
// 					<View style={{backgroundColor: '#1dd1a1', width: 50, height:50}} />
// 					<View style={{backgroundColor: '#5f27cd', width: 50, height:50}} />
// 				</View>
// 				<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
// 					<Text>Beranda</Text>
// 					<Text>Video</Text>
// 					<Text>Playlist</Text>
// 					<Text>Komunitas</Text>
// 					<Text>Channel</Text>
// 					<Text>Tentang</Text>
// 				</View>
// 				<View style={{flexDirection: 'row', alignItems: 'center'}}>
// 					<Image source={{uri: 'http://placeimg.com/100/100/tech'}} style={{width: 100, height: 100, borderRadius: 50, marginRight: 14, marginTop: 10}} />
// 					<View>
// 						<Text style={{fontSize: 20, fontWeight: 'bold'}}>Gambar Teknologi</Text>
// 						<Text>{this.state.text}</Text>
// 					</View>
// 				</View>
// 			</View>
// 		);
// 	}
// }

const FlexBox = () => {
	return(
		<View>
			<View style={{flexDirection: 'row', backgroundColor: '#c8d6e5', alignItems: 'center', justifyContent: 'space-between'}}>
				<View style={{backgroundColor: '#ee5253', width: 50, height:50}} />
				<View style={{backgroundColor: '#feca57', width: 50, height:50}} />
				<View style={{backgroundColor: '#1dd1a1', width: 50, height:50}} />
				<View style={{backgroundColor: '#5f27cd', width: 50, height:50}} />
			</View>
			<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
				<Text>Beranda</Text>
				<Text>Video</Text>
				<Text>Playlist</Text>
				<Text>Komunitas</Text>
				<Text>Channel</Text>
				<Text>Tentang</Text>
			</View>
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				<Image source={{uri: 'http://placeimg.com/100/100/tech'}} style={{width: 100, height: 100, borderRadius: 50, marginRight: 14, marginTop: 10}} />
				<View>
					<Text style={{fontSize: 20, fontWeight: 'bold'}}>Gambar Teknologi</Text>
					<Text>Sample Deskription</Text>
				</View>
			</View>
		</View>
	);
}

export default FlexBox;