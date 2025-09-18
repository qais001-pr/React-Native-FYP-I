/* eslint-disable no-trailing-spaces */
// // import React, { useState, useEffect } from 'react';
// // import {
// //   View, Text, TextInput, ScrollView, StyleSheet,
// //   TouchableOpacity, Alert, Modal, ActivityIndicator,
// // } from 'react-native';
// // import { Button } from 'react-native-paper';
// // import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// // import { SelectList } from 'react-native-dropdown-select-list';

// // const LetterEditor = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [body, setBody] = useState({
// //     text: '', fontSize: 16, isBold: false, isItalic: false,
// //     isUnderlined: false, alignment: 'left',
// //   });

// //   const [templateName, setTemplateName] = useState('');
// //   const [templateType, setTemplateType] = useState('');
// //   const [discipline, setDiscipline] = useState('');
// //   const [section, setSection] = useState('');
// //   const [tagOptions, setTagOptions] = useState([]);
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [selectedColumn, setSelectedColumn] = useState('');
// //   const [selectedOperator, setSelectedOperator] = useState('');
// //   const [conditionValue, setConditionValue] = useState('');
// //   const [conditionDisplayText, setConditionDisplayText] = useState('');
// //   const [selectedTable, setSelectedTable] = useState('');
// //   const [selectedColumnForTag, setSelectedColumnForTag] = useState('');

// //   const columns = ['CGPA', 'Attendance', 'Marks', 'Age'];
// //   const operators = ['=', '!=', '<', '<=', '>', '>='];
// //   const fontSizeOptions = ['12', '14', '16', '18', '20', '24'].map(size => ({ key: size, value: size }));
// // 
// //   useEffect(() => {
// //     setTagOptions([
// //       { key: '<name>', value: '<name>' },
// //       { key: '<date>', value: '<date>' },
// //     ]);
// //   }, []);

// //   const toggleStyle = prop => setBody(prev => ({ ...prev, [prop]: !prev[prop] }));
// //   const changeAlignment = alignment => setBody(prev => ({ ...prev, alignment }));
// //   const changeFontSize = size => setBody(prev => ({ ...prev, fontSize: parseInt(size) }));

// //   const applyStyles = field => ({
// //     fontSize: field.fontSize,
// //     textAlign: field.alignment,
// //     padding: 10,
// //     backgroundColor: '#fff',
// //     marginBottom: 10,
// //     textAlignVertical: 'top',
// //     ...(field.isBold && { fontWeight: 'bold' }),
// //     ...(field.isItalic && { fontStyle: 'italic' }),
// //     ...(field.isUnderlined && { textDecorationLine: 'underline' }),
// //   });

// //   const handleTagInsert = tag => {
// //     if (tag) setBody(prev => ({ ...prev, text: prev.text + tag }));
// //   };

// //   const handleAddTagFromTableColumn = () => {
// //     if (!selectedTable || !selectedColumnForTag) {
// //       Alert.alert('Error', 'Please select both table and column.');
// //       return;
// //     }
// //     const newTag = `<${selectedColumnForTag.toLowerCase()}>`;
// //     if (tagOptions.find(t => t.key.toLowerCase() === newTag.toLowerCase())) {
// //       Alert.alert('Duplicate Tag', 'This tag already exists.');
// //       return;
// //     }
// //     setTagOptions(prev => [...prev, { key: newTag, value: newTag }]);
// //     setBody(prev => ({ ...prev, text: prev.text + newTag }));
// //     setSelectedTable('');
// //     setSelectedColumnForTag('');
// //     Alert.alert('Success', 'Tag added.');
// //   };

// //   const handleSaveTemplate = () => {
// //     if (!templateName.trim() || !templateType.trim() || !body.text.trim()) {
// //       Alert.alert('Error', 'Please fill all required fields.');
// //       return;
// //     }
// //     Alert.alert('Success', 'Template saved locally');
// //   };

// //   if (loading) {
// //     return (
// //       <View style={styles.loaderContainer}>
// //         <ActivityIndicator size="large" color="#38166D" />
// //         <Text>Saving changes...</Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <ScrollView style={styles.container}>
// //       <Text style={styles.heading}>New Template</Text>

// //       <TextInput style={styles.input} placeholder="Template Name" value={templateName} onChangeText={setTemplateName} />
// //       <TextInput style={styles.input} placeholder="Template Type" value={templateType} onChangeText={setTemplateType} />
// //       <TextInput style={styles.input} placeholder="Discipline (e.g., BSCS)" value={discipline} onChangeText={setDiscipline} />
// //       <TextInput style={styles.input} placeholder="Section (e.g., A)" value={section} onChangeText={setSection} />

// //       {/* Toolbar */}
// //       <View style={styles.toolbar}>
// //         <TouchableOpacity onPress={() => toggleStyle('isBold')} style={[styles.toolbarButton, body.isBold && styles.activeButton]}>
// //           <Text style={styles.toolbarButtonText}>B</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => toggleStyle('isItalic')} style={[styles.toolbarButton, body.isItalic && styles.activeButton]}>
// //           <Text style={styles.toolbarButtonText}>I</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => toggleStyle('isUnderlined')} style={[styles.toolbarButton, body.isUnderlined && styles.activeButton]}>
// //           <Text style={styles.toolbarButtonText}>U</Text>
// //         </TouchableOpacity>
// //         <SelectList 
// //           data={fontSizeOptions} 
// //           setSelected={value => changeFontSize(value)} 
// //           placeholder={`Size: ${body.fontSize}`} 
// //           search={false} 
// //           boxStyles={styles.fontSizeDropdown} 
// //           inputStyles={styles.dropdownInput} 
// //           defaultOption={{ key: body.fontSize.toString(), value: body.fontSize.toString() }} 
// //         />
// //         <TouchableOpacity onPress={() => changeAlignment('left')} style={[styles.toolbarButton, body.alignment === 'left' && styles.activeButton]}>
// //           <Icon name="format-align-left" size={20} />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => changeAlignment('center')} style={[styles.toolbarButton, body.alignment === 'center' && styles.activeButton]}>
// //           <Icon name="format-align-center" size={20} />
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => changeAlignment('right')} style={[styles.toolbarButton, body.alignment === 'right' && styles.activeButton]}>
// //           <Icon name="format-align-right" size={20} />
// //         </TouchableOpacity>
// //       </View>

// //       {/* Tagging */}
// //       <View style={styles.tagContainer}>
// //         <SelectList data={tagOptions} setSelected={handleTagInsert} placeholder="Insert Tag" search={false} boxStyles={styles.dropdownBox} inputStyles={styles.dropdownInput} />
// //         <SelectList data={[{ key: 'Students', value: 'Students' }]} setSelected={setSelectedTable} placeholder="Select Table" search={false} boxStyles={styles.dropdownBox} inputStyles={styles.dropdownInput} />
// //         {selectedTable ? (
// //           <SelectList data={['Name', 'RollNo', 'Age'].map(col => ({ key: col, value: col }))} setSelected={setSelectedColumnForTag} placeholder="Select Column" search={false} boxStyles={styles.dropdownBox} inputStyles={styles.dropdownInput} />
// //         ) : null}
// //         <Button mode="contained" onPress={handleAddTagFromTableColumn} disabled={!selectedTable || !selectedColumnForTag} style={{ marginTop: 8 }}>
// //           Add Tag from Column
// //         </Button>
// //         <Button mode="outlined" onPress={() => setModalVisible(true)} style={{ marginTop: 8 }}>
// //           Add Conditional Tag
// //         </Button>
// //       </View>

// //       <TextInput 
// //         multiline 
// //         style={[styles.bodyInput, applyStyles(body)]} 
// //         value={body.text} 
// //         onChangeText={text => setBody(prev => ({ ...prev, text }))} 
// //         placeholder="Write your letter here..." 
// //       />

// //       <Button mode="contained" onPress={handleSaveTemplate} style={{ marginVertical: 10 }}>
// //         Save Template
// //       </Button>

// //       {/* Modal */}
// //       <Modal visible={modalVisible} animationType="slide" transparent>
// //         <View style={styles.modalBackground}>
// //           <View style={styles.modalContainer}>
// //             <Text style={styles.modalTitle}>Add Condition</Text>
// //             <Text>Select Column:</Text>
// //             <SelectList data={columns.map(c => ({ key: c, value: c }))} setSelected={setSelectedColumn} placeholder="Select column" search={false} boxStyles={styles.dropdownBox} inputStyles={styles.dropdownInput} />
// //             <Text>Select Operator:</Text>
// //             <SelectList data={operators.map(op => ({ key: op, value: op }))} setSelected={setSelectedOperator} placeholder="Select operator" search={false} boxStyles={styles.dropdownBox} inputStyles={styles.dropdownInput} />
// //             <Text>Enter Value:</Text>
// //             <TextInput style={styles.input} value={conditionValue} onChangeText={setConditionValue} placeholder="Value" />
// //             <Text>Display Text:</Text>
// //             <TextInput style={styles.input} value={conditionDisplayText} onChangeText={setConditionDisplayText} placeholder="Text to show" />
// //             <View style={styles.modalButtons}>
// //               <Button mode="text" onPress={() => setModalVisible(false)} style={{ marginRight: 10 }}>Cancel</Button>
// //               <Button mode="contained" onPress={() => {
// //                 if (!selectedColumn || !selectedOperator || !conditionValue || !conditionDisplayText) {
// //                   Alert.alert('Error', 'Please fill all fields');
// //                   return;
// //                 }
// //                 const conditionString = `{${selectedColumn.toLowerCase()}${selectedOperator}${conditionValue},${conditionDisplayText}}`;
// //                 setBody(prev => ({ ...prev, text: prev.text + conditionString }));
// //                 setSelectedColumn('');
// //                 setSelectedOperator('');
// //                 setConditionValue('');
// //                 setConditionDisplayText('');
// //                 setModalVisible(false);
// //               }}>Insert</Button>
// //             </View>
// //           </View>
// //         </View>
// //       </Modal>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 10, backgroundColor: '#f0f0f0' },
// //   heading: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
// //   input: { backgroundColor: '#fff', padding: 10, marginVertical: 8, borderRadius: 4, borderColor: '#ccc', borderWidth: 1 },
// //   toolbar: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
// //   toolbarButton: { padding: 8, marginRight: 8, backgroundColor: '#eee', borderRadius: 4, borderColor: '#aaa', borderWidth: 1 },
// //   activeButton: { backgroundColor: '#007bff' },
// //   toolbarButtonText: { fontWeight: 'bold' },
// //   fontSizeDropdown: { width: 70, marginRight: 8 },
// //   dropdownInput: { fontSize: 14 },
// //   tagContainer: { marginVertical: 10 },
// //   dropdownBox: { marginBottom: 8 },
// //   bodyInput: { minHeight: 200, borderColor: '#ccc', borderWidth: 1, borderRadius: 4, backgroundColor: '#fff' },
// //   modalBackground: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', paddingHorizontal: 20 },
// //   modalContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 8 },
// //   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
// //   modalButtons: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 },
// //   loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// // });

// // export default LetterEditor;



// // import React, { useEffect, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   FlatList,
// //   StyleSheet,
// //   ActivityIndicator,
// //   TouchableOpacity,
// // } from "react-native"

// // const App = () => {
// //   const [studentIds, setStudentIds] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // Simulate fetching data locally instead of API
// //   useEffect(() => {
// //     setTimeout(() => {
// //       setStudentIds(['2022-ARID-4303','2020-ARID-4393' ,'2018-ARID-4456' ,'2020-ARID-4356' ]); // dummy IDs
// //       setLoading(false);
// //     }, 1000);
// //   }, []);

// //   const renderItem = ({ item }) => (
// //     <TouchableOpacity style={styles.card}>
// //       <Text style={styles.student}>Student ID: {item}</Text>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Student History</Text>
// //       {loading ? (
// //         <ActivityIndicator size="large" />
// //       ) : (
// //         <FlatList
// //           data={studentIds}
// //           keyExtractor={(item, index) => index.toString()}
// //           renderItem={renderItem}
// //           ListEmptyComponent={<Text>No students found.</Text>}
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 16, backgroundColor: "#fff" },
// //   header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
// //   card: {
// //     backgroundColor: "#f2f2f2",
// //     padding: 15,
// //     marginVertical: 6,
// //     borderRadius: 8,
// //   },
// //   student: { fontSize: 16, fontWeight: "bold" },
// // });

// // export default App;
















// // import React, { useEffect, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   ActivityIndicator,
// //   Image,
// //   ScrollView,
// //   Alert,
// // } from "react-native";

// // const App = () => {
// //   const [letterContent, setLetterContent] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     // Simulate API call delay with dummy data
// //     setTimeout(() => {
// //       const dummyContent =
// //         "As the <designation> of BIIT, I know <studentname> from <year>.<pronoun> secured CGPA of <cgpa>.<pronoun> has been {cgpa>3.5, execellent student}{cgpa>3.0, good student}{cgpa>2.5, average student}. I would like to take this opportunity to recommend <possessivepronoun> for your graduate program.I feel confident that <studentname> will continue to succeed in <possessivepronoun> studies.In class, <pronoun> has proven to be a take-charge person who is able to successfully develop plans and implement them.<pronoun> has successfully demonstrated leadership ability by counseling new and prospective students.It is for these reasons that I offer high recommendations for <studentname> without reservation. If you have any questions regarding this recommendation, please do not hesitate to contact me.\n<teachername>\n<teacheremail>";
// //       setLetterContent(dummyContent);
// //       setLoading(false);
// //     }, 1000);
// //   }, []);

// //   const handleEdit = () => {
// //     if (!letterContent) {
// //       Alert.alert("Error", "No content to edit.");
// //       return;
// //     }
// //     Alert.alert("Edit Action", "Here you could open an editor screen.");
// //   };

// //   const handleShare = () => {
// //     Alert.alert("Share Action", "Here you could share this letter.");
// //   };

// //   const renderLetterContent = () => {
// //     if (loading) {
// //       return <ActivityIndicator size="large" color="#0000ff" />;
// //     }

// //     if (error) {
// //       return <Text style={styles.errorText}>{error}</Text>;
// //     }

// //     if (!letterContent) {
// //       return <Text style={styles.errorText}>No letter content available</Text>;
// //     }

// //     return (
// //       <ScrollView>
// //         <View style={styles.headerRow}>
// //           {/* <Image
// //             source={require("../assets/Logo.png")}
// //             style={styles.logo}
// //             resizeMode="contain"
// //           /> */}
// //           <View style={styles.instituteInfo}>
// //             <Text style={styles.institute}>
// //               Barani Institute of Information Technology
// //             </Text>
// //             <Text style={styles.address}>
// //               PMAS Arid Agriculture University Rawalpindi
// //             </Text>
// //             <Text style={styles.address}>6th Road Chowk, Murree Road</Text>
// //             <Text style={styles.address}>Rawalpindi, Pakistan</Text>
// //             <Text style={styles.email}>email: admin@bilt.edu.pk</Text>
// //           </View>
// //         </View>

// //         <View style={styles.divider} />
// //         <Text style={styles.letterType}>Generic Letter</Text>
// //         <View style={styles.divider} />

// //         <Text style={styles.contentText}>
// //           {letterContent.split("\n").map((line, index, array) => (
// //             <React.Fragment key={index}>
// //               {line}
// //               {index !== array.length - 1 && "\n"}
// //             </React.Fragment>
// //           ))}
// //         </Text>
// //       </ScrollView>
// //     );
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {renderLetterContent()}

// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity
// //           style={styles.backButton}
// //           onPress={() => Alert.alert("Back Action", "Going back...")}
// //         >
// //           <Text style={styles.buttonText}>Back</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
// //           <Text style={styles.buttonText}>Edit</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
// //           <Text style={styles.buttonText}>Share</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: { flex: 1, padding: 20, backgroundColor: "#fff" },
// //   headerRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginBottom: 10,
// //   },
// //   logo: {
// //     width: 70,
// //     height: 70,
// //     marginRight: 10,
// //   },
// //   instituteInfo: {
// //     flex: 1,
// //   },
// //   institute: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     textAlign: "center",
// //   },
// //   address: {
// //     fontSize: 14,
// //     textAlign: "center",
// //   },
// //   email: {
// //     fontSize: 14,
// //     textAlign: "center",
// //     marginBottom: 10,
// //   },
// //   divider: {
// //     borderBottomColor: "black",
// //     borderBottomWidth: 1,
// //     marginVertical: 10,
// //   },
// //   letterType: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     textAlign: "center",
// //     marginBottom: 10,
// //     textDecorationLine: "underline",
// //   },
// //   contentText: {
// //     fontSize: 16,
// //     lineHeight: 24,
// //     color: "#000",
// //     textAlign: "justify",
// //   },
// //   errorText: {
// //     color: "red",
// //     textAlign: "center",
// //     marginTop: 20,
// //   },
// //   buttonContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginTop: 20,
// //   },
// //   backButton: {
// //     backgroundColor: "#ccc",
// //     padding: 10,
// //     borderRadius: 5,
// //     flex: 1,
// //     marginRight: 5,
// //   },
// //   editButton: {
// //     backgroundColor: "#FFA500",
// //     padding: 10,
// //     borderRadius: 5,
// //     flex: 1,
// //     marginHorizontal: 5,
// //   },
// //   shareButton: {
// //     backgroundColor: "#2196F3",
// //     padding: 10,
// //     borderRadius: 5,
// //     flex: 1,
// //     marginLeft: 5,
// //   },
// //   buttonText: {
// //     color: "white",
// //     textAlign: "center",
// //     fontWeight: "bold",
// //   },
// // });

// // export default App;










// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   StyleSheet,
//   Image,
// } from "react-native";

// const Teachers = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // ✅ Dummy static teacher list
//   const teachers = [
//     {
//       teacherId: 1,
//       name: "Ali Khan",
//       email: "ali123@gmail.com",
//       phone: "03001234567",
//       image: require("./assets/image.png"),

//     },
//     {
//       teacherId: 2,
//       name: "Munir Ahmad",
//       email: "munir123@gmail.com",
//       phone: "03007654321",  image: require("./assets/image.png"),
//     },
//     {
//       teacherId: 3,
//       name: "Hassan Sohail",
//       email: "hassan123@gmail.com",
//       phone: "03111223344",  image: require("./assets/image.png"),
//     },
//   ];

//   const filteredTeachers = teachers.filter((teacher) =>
//     teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       {/* ✅ Top banner image */}
//       <Image
//         source={require("./assets/Select.jpg")}
//         style={styles.topImage}
//         resizeMode="cover"
//       />

//       {/* ✅ Search bar under image */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search teacher"
//           placeholderTextColor="#888"
//           value={searchTerm}
//           onChangeText={setSearchTerm}
//           style={styles.searchInput}
//         />
//       </View>

//       {/* ✅ Teacher list below search */}
//       {filteredTeachers.length === 0 ? (
//         <Text style={styles.emptyText}>No teachers found.</Text>
//       ) : (
//         <FlatList
//           data={filteredTeachers}
//           keyExtractor={(item) => item.teacherId.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//            <Image
//   source={typeof item.image === "string" ? { uri: item.image } : item.image}
//   style={styles.avatar}
// />

//               <View style={styles.info}>
//                 <Text style={styles.name}>{item.name}</Text>
//                 <Text style={styles.email}>{item.email}</Text>
//               </View>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f8f8f8" },

//   // ✅ Top image instead of full background
//   topImage: {
//     width: "100%",
//     height: 180,
//   },

//   searchContainer: {
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//   searchInput: {
//     backgroundColor: "#f0f0f0",
//     borderRadius: 25,
//     paddingHorizontal: 20,
//     height: 40,
//     fontSize: 16,
//     color: "#000",
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     marginHorizontal: 10,
//     marginVertical: 6,
//     borderRadius: 10,
//     padding: 12,
//     alignItems: "center",
//     elevation: 2,
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "#ccc",
//     marginRight: 15,
//   },
//   info: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: "bold",
//     fontSize: 16,
//     marginBottom: 2,
//   },
//   email: {
//     color: "#444",
//   },
//   phone: {
//     color: "#666",
//   },
//   emptyText: {
//     textAlign: "center",
//     marginTop: 20,
//     color: "#666",
//   },
// });

// export default Teachers;
