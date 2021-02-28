// import React from 'react';
// import { TouchableOpacity, StyleSheet, ActivityIndicator, Image, View } from 'react-native';
// import { Rating } from 'react-native-ratings';
// import { color, metrics } from '../constants';
// import { IconX, ICON_TYPE } from '../icons';
// import Text from './Text'
// import moment from 'moment'



// export const CashbackItem = ({ item, onPress, isSelected = false, }) => {
//     console.log('CashbackItem');
//     console.log(item);
//     return (

//         <TouchableOpacity style={{
//             flexDirection: 'row',
//             width: metrics.screenWidth * 0.6,
//             borderRadius: metrics.s8,
//             backgroundColor: color.white,
//             marginVertical: 8,
//             height: 120,

//             marginStart: 12,
//             padding: metrics.s8,
//             shadowColor: "#000",

//             shadowOffset: {
//                 width: 0,
//                 height: 1,
//             },
//             shadowOpacity: 0.20,
//             shadowRadius: 1.41,
//             elevation: 2,
//         }}
//             onPress={() => {
//                 onPress()
//                 // navigation.navigate(strings.store)
//             }}>
//             <Image style={{ width: '55%', height: '100%', alignSelf: 'center', borderRadius: metrics.s8, overflow: 'hidden' }} source={item?.images?.length > 0 ? { uri: item?.images[0] } : require('../asstes/icons/storePlaceHolder.png')} />
//             <View style={{ marginStart: 8, flex: 1 }}>
//                 <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 14, }}> {item?.name}</Text>
//                 <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 12, color: color.gray, }} >
//                     {item?.description}
//                 </Text>
//                 <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
//                     <Text style={{ fontSize: 20, color: color.tint }}>10%</Text>
//                     <Image style={{ width: 20, height: 20, tintColor: color.tint }} source={require('../asstes/icons/cashback.png')} resizeMode={'contain'} />

//                 </View>
//                 <Text style={{ fontSize: 12, color: color.tint, textAlign: 'center' }}>Cashback todey</Text>
//             </View>

//         </TouchableOpacity>

//     );
// };

// export const CashbackItemHistory = ({ item, onPress, isSelected = false, }) => {
//     return (

//         <TouchableOpacity style={{
//             flexDirection: 'row',
//             width: metrics.screenWidth * 0.6,
//             borderRadius: metrics.s8,
//             backgroundColor: color.white,
//             marginVertical: 8,
//             height: 120,

//             marginStart: 12,
//             padding: metrics.s8,
//             shadowColor: "#000",

//             shadowOffset: {
//                 width: 0,
//                 height: 1,
//             },
//             shadowOpacity: 0.20,
//             shadowRadius: 1.41,
//             elevation: 2,
//         }}
//             onPress={() => {
//                 onPress()
//             }}>
//             <Image style={{ width: '55%', height: '100%', alignSelf: 'center', borderRadius: metrics.s8, overflow: 'hidden' }} source={{ uri: item.image }} />
//             <View style={{ marginStart: 8, flex: 1, alignItems: 'center' }}>
//                 <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 10, color: color.gray, }} >
//                     {moment().format('ll')}
//                 </Text>
//                 <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 14, }}> {item.title}</Text>
//                 <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 12, color: color.gray, }} >
//                     {item.description}
//                 </Text>
//                 <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
//                     <Text style={{ fontSize: 20, color: color.tint }}>£10</Text>
//                 </View>
//             </View>

//         </TouchableOpacity>

//     );
// };

// export const StoresCategoryItem = ({ item, onPress, isSelected = false, }) => {
//     return (
//         <>
//             <TouchableOpacity
//                 style={{
//                     width: metrics.screenWidth * 0.2,
//                     minHeight: metrics.screenWidth * 0.2,
//                     justifyContent: 'center', alignItems: 'center', backgroundColor: color.white, marginHorizontal: 8
//                 }}
//                 onPress={() => {
//                     onPress()

//                 }}>
//                 <View style={{
//                     backgroundColor: color.white,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     borderWidth: 1,
//                     borderRadius: 8,
//                     marginHorizontal: 8,
//                     width: '100%',
//                     flex: 1,
//                     borderColor: color.grey100,
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 1,
//                     },
//                     shadowOpacity: 0.20,
//                     shadowRadius: 1.41,
//                     elevation: 2,
//                 }}>
//                     <Image style={{ width: 30, height: 30, tintColor: isSelected ? color.tint : color.text }} source={item.image} resizeMode={'contain'} />
//                 </View>
//                 <Text style={{ color: isSelected ? color.tint : color.gray, marginVertical: 4 }}>{item.title}</Text>

//             </TouchableOpacity>
//         </>
//     );
// };

// export const CategoryItem = ({ item, onPress, isSelected = false, }) => {
//     return (
//         <>
//             <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
//                 onPress={() => {
//                     onPress()
//                 }}>
//                 <Text style={{ color: isSelected ? color.tint : color.grey400, fontSize: 12 }}>{item.title}</Text>
//                 <View style={{ backgroundColor: isSelected ? color.tint : null, width: 8, height: 4, borderRadius: 2 }} ></View>
//             </TouchableOpacity>
//         </>
//     );
// };

// export const BoldCategoryItem = ({ item, onPress, isSelected = false, }) => {
//     return (
//         <>
//             <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
//                 onPress={() => {
//                     onPress()
//                 }}>
//                 <Text style={{ color: isSelected ? color.text : color.grey400, fontSize: 16, textAlign: 'center' }}>{item.title}</Text>
//                 <View style={{ backgroundColor: isSelected ? color.text : null, width: 16, height: 4, borderRadius: 2 }} ></View>
//             </TouchableOpacity>
//         </>
//     );
// };

// export const StoreItem = ({ item, rate = 0, onPress, isSelected = false, distance = null }) => {
//     console.log('near me item', item);
//     return (
//         <>
//             <TouchableOpacity style={{
//                 flex: 1,
//                 flexDirection: 'row',
//                 borderRadius: metrics.s8,
//                 backgroundColor: color.white,
//                 marginTop: metrics.s8,
//                 padding: metrics.s8,
//             }}
//                 onPress={() => {
//                     onPress()
//                 }}
//             >
//                 <Image style={{ width: '35%', height: 80, alignSelf: 'stretch', borderRadius: metrics.s8, overflow: 'hidden' }} source={item?.images?.length > 0 ? { uri: item?.images[0] } : require('../asstes/icons/storePlaceHolder.png')} />
//                 <View style={{ marginHorizontal: metrics.s8, width: '35%', }}>
//                     <View style={{ flex: 1, flexDirection: 'column' }}>

//                         <Text
//                             numberOfLines={1} ellipsizeMode='tail'
//                             style={{ flex: 1, fontSize: 16 }}>
//                             {item.name}
//                         </Text>
//                         <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 12, color: color.gray, fontFamily: null }} >
//                             {item.description}
//                         </Text>
//                         <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
//                             <Rating
//                                 type='custom'
//                                 ratingCount={5}
//                                 imageSize={14}
//                                 readonly={true}
//                                 startingValue={rate}
//                                 ratingColor={color.yellow}
//                             />
//                         </View>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                             <Text
//                                 style={{ flex: 1, fontSize: 10, color: color.gray, fontFamily: null }}>
//                                 {item.rating.length} reviews
//                                 </Text>

//                         </View>
//                         {/* <Text style={{ fontSize: 10, color: color.gray, fontFamily: null }}>
//                             {item.distance}
//                         </Text> */}

//                     </View>

//                 </View>
//                 <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
//                     {distance && !isNaN(distance) && <View style={{ flexDirection: 'row', alignItems: 'center', }}>
//                         <Text style={{ fontSize: 20, color: color.tint }}>
//                             { Math.floor(distance).toString()}
//                         </Text>
//                         <Text style={{ fontSize: 12, color: color.tint, alignSelf: 'flex-end' }}>
//                             km
//                             </Text>
//                     </View>
//                     }
//                 </View>

//             </TouchableOpacity>
//         </>
//     );
// };

// export const ProductCategoryItem = ({ item, onPress, isSelected = false, }) => {
//     return (
//         <>
//             <TouchableOpacity style={{
//                 flex: 1,
//                 flexDirection: 'row',
//                 borderRadius: metrics.s8,
//                 backgroundColor: color.white,
//                 marginTop: metrics.s8,
//                 padding: metrics.s8,
//             }}
//                 onPress={() => {

//                 }}
//             >
//                 <Image style={{ width: '35%', alignSelf: 'stretch', borderRadius: metrics.s8, overflow: 'hidden' }} source={{ uri: item.image }} />
//                 <View style={{ marginHorizontal: metrics.s8, width: '35%', }}>
//                     <View style={{ flex: 1, flexDirection: 'column' }}>

//                         <Text
//                             numberOfLines={1} ellipsizeMode='tail'
//                             style={{ flex: 1, fontSize: 16 }}>
//                             {item.title}
//                         </Text>
//                         <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 12, color: color.gray, fontFamily: null }} >
//                             {item.description}
//                         </Text>
//                         <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
//                             <Rating
//                                 type='custom'
//                                 ratingCount={5}
//                                 imageSize={14}
//                                 readonly={true}
//                                 startingValue={item.rank}
//                                 ratingColor={color.yellow}
//                             />
//                         </View>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                             <Text
//                                 style={{ flex: 1, fontSize: 10, color: color.gray, fontFamily: null }}>
//                                 {item.reviews} reviews
//                                 </Text>

//                         </View>
//                         <Text style={{ fontSize: 10, color: color.gray, fontFamily: null }}>
//                             {item.distance}
//                         </Text>

//                     </View>

//                 </View>
//                 <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
//                     <View style={{ flexDirection: 'row', alignItems: 'center', }}>
//                         <Text style={{ fontSize: 20, color: color.tint }}>
//                             10%
//                             </Text>
//                         <Image style={{ width: 20, height: 20, tintColor: color.tint }} source={require('../asstes/icons/cashback.png')} resizeMode={'contain'} />

//                     </View>
//                     <Text style={{ fontSize: 12, color: color.tint }}>
//                         Cashback todey
//                             </Text>
//                 </View>

//             </TouchableOpacity>

//         </>
//     );
// };

// export const TransactioItem = ({ item, onPress, isSelected = false, }) => {
//     console.log('restuarns', item);
//     return (
//         <>
//             <TouchableOpacity style={{
//                 flex: 1,
//                 flexDirection: 'row',
//                 borderRadius: metrics.s8,
//                 backgroundColor: color.white,
//                 marginTop: metrics.s8,
//                 padding: metrics.s8,
//                 shadowColor: "#000",
//                 shadowOffset: {
//                     width: 0,
//                     height: 1,
//                 },
//                 shadowOpacity: 0.20,
//                 shadowRadius: 1.41,
//                 elevation: 2,
//             }}
//                 onPress={() => {
//                     onPress()

//                 }}>
//                 <Image style={{ width: '38%', height: 80, borderRadius: metrics.s8, overflow: 'hidden' }} source={item?.images?.length > 0 ? { uri: item?.images[0] } : require('../asstes/icons/storePlaceHolder.png')} />

//                 <View style={{ flex: 1, marginHorizontal: metrics.s8 }}>
//                     <View style={{ flex: 1, flexDirection: 'column' }}>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                             <Text
//                                 numberOfLines={1} ellipsizeMode='tail'
//                                 style={{ flex: 1, fontSize: 14, }}>
//                                 {item.name}
//                             </Text>
//                             {/* £{item.price.toFixed(2)} */}
//                             <Text style={{ fontSize: 14, }}>
//                                 £ddd
//                             </Text>
//                         </View>
//                         <View style={{ width: '50%', height: 28, justifyContent: 'center' }}>
//                             <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 10, fontFamily: 'Oswald-Regular' }} >
//                                 {item.description}
//                             </Text>
//                         </View>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//                             <Rating
//                                 type='custom'
//                                 ratingCount={5}
//                                 imageSize={10}
//                                 readonly={true}
//                                 startingValue={item.rank}
//                                 ratingColor={color.yellow}
//                             />
//                             <Text style={{ fontSize: 12, color: color.yellow }}>
//                                 {item.price}
//                             </Text>
//                         </View>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                             <Text
//                                 style={{ flex: 1, fontSize: 8, fontFamily: null, color: color.gray }}>
//                                 {item.reviews} reviews
//                             </Text>
//                             <Text style={{ fontSize: 8, color: color.gray }}>
//                                 cashback
//                             </Text>
//                         </View>

//                     </View>
//                     <Image style={{
//                         width: 20,
//                         height: 20,
//                         position: 'absolute',
//                         top: '50%',
//                         left: "50%",
//                         marginTop: -15,
//                         tintColor: color.tint

//                     }} source={require('../asstes/icons/logo.png')}
//                         resizeMode={'contain'} />

//                 </View>

//             </TouchableOpacity>
//         </>
//     );
// };

// export const CashbackItemHistoryVertical = ({ item, onPress, isSelected = false, }) => {
//     return (
//         <>
//             <View style={{ flex: 1, }}>
//                 <TouchableOpacity style={{
//                     flex: 1,
//                     flexDirection: 'row',
//                     borderRadius: metrics.s8,
//                     backgroundColor: color.white,
//                     marginTop: metrics.s8,
//                     padding: metrics.s8,
//                 }}
//                     onPress={() =>
//                         onPress()
//                     }
//                 >
//                     <Image style={{ width: '35%', alignSelf: 'stretch', borderRadius: metrics.s8, overflow: 'hidden' }} source={{ uri: item.image }} />
//                     <View style={{ marginHorizontal: metrics.s8, width: '35%', }}>
//                         <View style={{ flex: 1, flexDirection: 'column' }}>

//                             <Text
//                                 numberOfLines={1} ellipsizeMode='tail'
//                                 style={{ flex: 1, fontSize: 16 }}>
//                                 {item.title}
//                             </Text>
//                             <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 12, color: color.gray, fontFamily: null }} >
//                                 {item.description}
//                             </Text>
//                             <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
//                                 <Rating

//                                     type='custom'
//                                     ratingCount={5}
//                                     imageSize={14}
//                                     readonly={true}
//                                     startingValue={item.rank}
//                                     ratingColor={color.yellow}
//                                 />
//                             </View>
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                                 <Text
//                                     style={{ flex: 1, fontSize: 10, color: color.gray, fontFamily: null }}>
//                                     {item.reviews} reviews
//                                 </Text>

//                             </View>
//                             <Text style={{ fontSize: 10, color: color.gray, fontFamily: null }}>
//                                 {item.distance}
//                             </Text>

//                         </View>

//                     </View>
//                     <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center', }}>
//                             <Text style={{ fontSize: 20, color: color.tint }}>
//                                 10%
//                             </Text>
//                             <Image style={{ width: 20, height: 20, tintColor: color.tint }} source={require('../asstes/icons/cashback.png')} resizeMode={'contain'} />

//                         </View>
//                         <Text style={{ fontSize: 12, color: color.tint }}>
//                             Cashback todey
//                             </Text>

//                     </View>

//                 </TouchableOpacity>
//                 <View style={{ height: 1, flex: 1, backgroundColor: color.grey100, marginHorizontal: 20 }} />
//             </View>
//         </>
//     );
// };

// export const RedeemedItem = ({ item, onPress, isSelected = false, }) => {
//     return (
//         <>
//             <View style={{ flex: 1, }}>
//                 <TouchableOpacity style={{
//                     flex: 1,
//                     flexDirection: 'row',
//                     borderRadius: metrics.s8,
//                     backgroundColor: color.white,
//                     marginTop: metrics.s8,
//                     padding: metrics.s8,
//                 }}
//                     onPress={() => {
//                         onPress()
//                     }}
//                 >
//                     <Image style={{ width: '35%', alignSelf: 'stretch', borderRadius: metrics.s8, overflow: 'hidden' }} source={{ uri: item.image }} />
//                     <View style={{ marginHorizontal: metrics.s8, width: '35%', }}>
//                         <View style={{ flex: 1, flexDirection: 'column' }}>

//                             <Text
//                                 numberOfLines={1} ellipsizeMode='tail'
//                                 style={{ flex: 1, fontSize: 16 }}>
//                                 {item.title}
//                             </Text>
//                             <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 12, color: color.gray, fontFamily: null }} >
//                                 {item.description}
//                             </Text>
//                             <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
//                                 <Rating

//                                     type='custom'
//                                     ratingCount={5}
//                                     imageSize={14}
//                                     readonly={true}
//                                     startingValue={item.rank}
//                                     ratingColor={color.yellow}
//                                 />
//                             </View>
//                             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                                 <Text
//                                     style={{ flex: 1, fontSize: 10, color: color.gray, fontFamily: null }}>
//                                     {item.reviews} reviews
//                                 </Text>

//                             </View>
//                             <Text style={{ fontSize: 10, color: color.gray, fontFamily: null }}>
//                                 {item.distance}
//                             </Text>

//                         </View>

//                     </View>
//                     <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center', }}>
//                             <Text style={{ fontSize: 20, color: color.tint }}>
//                                 £10
//                             </Text>
//                             <Image style={{ width: 20, height: 20, tintColor: color.tint }} source={require('../asstes/icons/cashback.png')} resizeMode={'contain'} />

//                         </View>


//                     </View>

//                 </TouchableOpacity>
//                 <View style={{ height: 1, flex: 1, backgroundColor: color.grey100, marginHorizontal: 20 }} />
//             </View>
//         </>
//     );
// };

// export const ProductMenuItem = ({ item, onPress, isSelected = false, count = 0, onPlus, plus, increase, decrease }) => {
//     return (
//         <>
//             <TouchableOpacity style={{
//                 flex: 1,
//                 flexDirection: 'row',
//                 borderRadius: metrics.s8,
//                 backgroundColor: color.white,
//                 marginHorizontal: metrics.s8,
//                 marginTop: metrics.s8,

//                 shadowColor: "#000",
//                 shadowOffset: {
//                     width: 0,
//                     height: 1,
//                 },
//                 shadowOpacity: 0.20,
//                 shadowRadius: 1.41,

//                 elevation: 2,
//             }}
//                 onPress={() => onPress()}>

//                 <Image style={{ width: '38%', alignSelf: 'stretch', borderTopStartRadius: metrics.s8, borderRadius: metrics.s8, overflow: 'hidden', margin: 2 }} source={{ uri: item.image }} />
//                 <View style={{
//                     flex: 1, marginStart: -metrics.s8, backgroundColor: color.white, borderRadius: metrics.s8,
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 1,
//                     },
//                     shadowOpacity: 0.22,
//                     shadowRadius: 2.22,

//                     elevation: 3,
//                     padding: metrics.s8
//                 }}>
//                     <View style={{ flex: 1, flexDirection: 'column' }}>
//                         <Text
//                             numberOfLines={1} ellipsizeMode='tail'
//                             style={{ flex: 1, fontSize: 16, color: color.text }}>
//                             {item.name}
//                         </Text>

//                         <View style={{ height: 40, }}>
//                             <Text numberOfLines={3} ellipsizeMode='tail' style={{ fontFamily: null, fontSize: metrics.s10, color: color.gray }} >
//                                 {item.description}
//                             </Text>
//                         </View>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

//                             <Text style={{ fontSize: 16, color: color.text }}>
//                                 £{item.price}
//                             </Text>
//                             <View>

//                                 {plus ? <TouchableOpacity style={{
//                                     backgroundColor: color.tint, width: 60, justifyContent: 'center', alignItems: 'center',
//                                     marginEnd: -6,
//                                     marginBottom: -6,
//                                     padding: 8,
//                                     borderTopStartRadius: metrics.s8, borderBottomEndRadius: metrics.s8
//                                 }} onPress={() => {
//                                     onPlus()
//                                     // navigation.navigate(strings.product, { product: item })
//                                 }}>
//                                     {count != 0 && <Text style={{ fontSize: 10, color: color.tint, borderRadius: 10, borderColor: color.tint, borderWidth: 1, minWidth: 25, start: - 10, backgroundColor: color.white, position: 'absolute', textAlign: 'center', overflow: 'hidden' }}>{count}</Text>}

//                                     <IconX size={14} name={'plus'} color={color.white} />
//                                 </TouchableOpacity> :
//                                     <View style={{
//                                         backgroundColor: color.tint, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
//                                         marginEnd: -6,
//                                         marginBottom: -6,
//                                         borderTopStartRadius: metrics.s8, borderBottomEndRadius: metrics.s8
//                                     }}>
//                                         <Text style={{ color: color.white, fontSize: 14, padding: 8 }}>Add</Text>
//                                         <TouchableOpacity style={{ paddingHorizontal: 8 }} onPress={() => {
//                                             decrease()
//                                         }} >
//                                             <IconX size={14} name={'minus'} color={color.white} />
//                                         </TouchableOpacity>
//                                         <Text style={{ color: color.white, fontSize: 14, minWidth: 20, textAlign: 'center' }}>{count}</Text>
//                                         <TouchableOpacity style={{ padding: 8 }} onPress={() => {
//                                             increase()
//                                         }}>
//                                             <IconX size={14} name={'plus'} color={color.white} />
//                                         </TouchableOpacity>
//                                     </View>
//                                 }
//                             </View>
//                         </View>

//                     </View>

//                 </View>

//             </TouchableOpacity>
//         </>
//     );
// };
// // export const Item = ({ item, onPress, isSelected = false, }) => {
// //     return (
// //         <>

// //         </>
// //     );
// // };
// // export const Item = ({ item, onPress, isSelected = false, }) => {
// //     return (
// //         <>

// //         </>
// //     );
// // };




// const styles = StyleSheet.create({

// });
