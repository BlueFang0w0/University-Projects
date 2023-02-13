//Aleksandrs Lukjanovs - M00674847
#include <iostream>
#include <fstream>
#include <string>
#include <stdlib.h>
#include <vector>
#include <bits/stdc++.h>
#include <filesystem>
#include <chrono>
#include <ctime>  
#define LOG(x) std::cout << x << std::endl // Allows me to define my own commands. This one simplifies printing.

//Some cosmetic shortcuts. To add colours later.
#define RESET "\e[m"
#define RED "\033[31m" 
#define GREEN "\033[32m" 

using namespace std;

void split(string myInput, vector<string>& myOutput, char myFilter){ //Splits the input using "filter" then stores it.
	
	vector<char> characters;
	string characterMixer = "";
	myInput += myFilter;
	
	for(char& myInnerChar : myInput){ //
		if(myInnerChar != myFilter){
			characters.push_back(myInnerChar);
		}else{
			characterMixer = {characters.begin(), characters.end()};
			myOutput.push_back(characterMixer);
			characters.clear();
		}
	}
}

string spaceManager(int mode, string myInput){ //Simply handles all the spacers which in my case is @. It eather adds them replacing spaces or removes them adding spaces.
	string myOutput = "";
	vector<string> collection;
	if(mode == 0){
		split(myInput, collection, '@');
		for(int i = 0 ; i < collection.size() ; i++){
			if(i < (collection.size() - 1)){
				myOutput += collection[i] + " ";
			}else{myOutput += collection[i];}
		}
		
	}else{
		split(myInput, collection, ' ');
		for(int i = 0 ; i < collection.size() ; i++){
			if(i < (collection.size() - 1)){
				myOutput += collection[i] + "@";
			}else{myOutput += collection[i];}
		}
		
	}
	return myOutput;
}

void overwrite(string myFile, int inIndex, string myData){ //Handles overwriting a file line.
	ofstream myOutputB; //Make containers.
	ifstream myInputB;
	vector<string> fullLines;
	string tempDatastream = "";
	
	myOutputB.open(myFile, ios::app); // Output Stream
	myInputB.open(myFile);
	
	while(getline(myInputB, tempDatastream, '\n')){
		fullLines.push_back(tempDatastream);
	}
	fullLines[inIndex] = myData;
	for(int i = 0 ; i < fullLines.size() ; i++){
		myOutputB << fullLines[i] << endl; 
	}
	myOutputB.close();
	myInputB.close();
}

void loadData(){
	
	
}

class Database{ // Class definitions. ////////////////////////////////////////////
	protected:
	
	int stockID = 0;
	int quantity = 0;
	double price = 0.0;
	string name = "";
	string description = "";
	string tag = "";
	int minimumAge = 0;
	
	public:
	Database(int stockID2, int quantity2, double price2, string name2, string description2, string tag2, int minimumAge2){
		stockID = stockID2;
		quantity = quantity2;
		price = price2;
		name = name2;
		description = description2;
		tag = tag2;
		minimumAge = minimumAge2;
	}
	
	void sellItem(string salesAdress, string databaseAdress){ // Needs to check if item is available, ask if price has changed, then remove from quantity and store the sale record. 
		ofstream myOutputC; 
		ifstream myInputC;
		
		myOutputC.open(salesAdress, ios::app);
		myInputC.open(databaseAdress);
		
		string dataStreamC = "";
		vector<string> sectionsC;
		
		LOG("Enter the ID:");
		string inputID = "";
		cin >> inputID;
		
		LOG("Price offset:");
		string offset = "";
		cin >> offset;
		int changeMod = 0;
		int indCount = 0;
		
		while(getline(myInputC, dataStreamC , '\n')){
		split(dataStreamC, sectionsC, ' ');
		
		if(sectionsC[0] == inputID){
			indCount ++;
			if(atoi(sectionsC[1].c_str()) > 0){
				myOutputC << " " << sectionsC[0] << " " << sectionsC[3] << " " << (atoi(sectionsC[2].c_str()) + atoi(offset.c_str())) << endl; //Mark 1
				overwrite(databaseAdress, indCount, to_string(atoi(sectionsC[1].c_str()) - 1)); 
			}else{LOG("Not enought stock to sell.");}
		}else{LOG("Invalid ID.");}
		
		sectionsC.clear();
		}
		
		myOutputC.close();
		myInputC.close();
		
		
		

		
	}
	void removeStock(string databaseAdress, string idTarget){ // Literally erases the stock object based on ID.
		ofstream myOutputC; 
		ifstream myInputC;
		
		string dataStreamC = "";
		vector<string> sectionsC;
		vector<string> recolection;
 		
		int changeMod = 0;
		int indCount = 0;
		
		myOutputC.open(idTarget, ios::app);
		myInputC.open(databaseAdress);
		
		while(getline(myInputC, dataStreamC , '\n')){
		split(dataStreamC, sectionsC, ' ');
		indCount ++;
		LOG(dataStreamC);
		sectionsC.clear();
		}
		
		myOutputC.close();
		myInputC.close();
		
		LOG("Enter the ID:");
		string inputID = "";
		cin >> inputID;
		
		myOutputC.open(idTarget, ios::app);
		myInputC.open(databaseAdress);
		
		while(getline(myInputC, dataStreamC , '\n')){
		split(dataStreamC, sectionsC, ' ');
		if(sectionsC[0] != inputID){
			recolection.push_back(dataStreamC);
		}
		sectionsC.clear();
		}
		
		for(int i = 0 ; i < recolection.size(); i++){
			myOutputC << recolection[i] << endl;
		}
		myOutputC.close();
		myInputC.close();
	}
	void addItem(string databaseAdress){ // Adds +1 to stock ID count and takes in all details then adds new object for storage.
		ifstream myInputC;
		myInputC.open(databaseAdress);
		
		LOG("Enter the ID:");
		string inputID = "";
		cin >> inputID;

		LOG("Enter the Quantity:");
		string inputQuantity = "";
		cin >> inputQuantity;
		
		LOG("Enter the Price:");
		string inputPrice = "";
		cin >> inputPrice;
		
		LOG("Enter the Name:");
		string inputName = "";
		cin >> inputName;
		//inputName = spaceManager(1, inputName);
		
		LOG("Enter the Description:");
		string inputDescription = "";
		cin >> inputDescription;
		//inputDescription = spaceManager(1, inputDescription);
		
		LOG("Enter the Tag:");
		string inputTag = "";
		cin >> inputTag;
		
		
		
		//myInputC << inputID << inputQuantity << inputPrice << inputName << inputDescription << inputTag << endl;
	}
	void correctStock(){ // Provide item ID which should be matched to object which is retreived, then enter the quantity to change and put it back in.
		
	}
	void salesReport(){ // Sales report literally just logs whatever the numbers and names are line by line. 
		
	}
};

class Staff {
	protected:
	int generalID = 0;
	string name = "";
	string password = "";
	string email = "";
	int phone = 0;
	bool admin = false;
	
	public:
	Staff(int generalID2 , string name2, string password2, string email2, int phone2 , bool admin2){
		generalID = generalID2;
		name = name2;
		password = password2;
		email = email2;
		phone = phone2;
		admin = admin2;
	}
	
	void checkLogin(int logID , string logPass){ // Checks if the provided ID matches, then checks if provided password matches inside ID.
		
	}
};

class Admin : public Staff{
	private:
	int adminID = 0;
	
	public:
	Admin(int adminID2, int generalID2 , string name2, string password2, string email2, int phone2 , bool admin2):
		Staff(generalID2, name2, password2, email2, phone2, admin2){
		adminID = adminID2;
	}
	
	void registerUser(){ //Reads file containing the users and adds a new user on top after done collecting data.
		
	}
	void removeUser(){ // Asks for ID and literally removes the object by ID.
		
	}
};

class Book : public Database{
	private:
	string author = "";
	public:
	Book(string author2, int stockID2, int quantity2, double price2, string name2, string description2, string tag2, int minimumAge2):
		Database(stockID2, quantity2, price2, name2, description2, tag2, minimumAge2){
		author = author2;
	}
};

class Magazine : public Database{
	private:
	string productionCompany = "";
	public:
	Magazine(string productionCompany2, int stockID2, int quantity2, double price2, string name2, string description2, string tag2, int minimumAge2):
		Database(stockID2, quantity2, price2, name2, description2, tag2, minimumAge2){
		productionCompany = productionCompany2;
	}
};

class CD : public Database{
	private:
	string singers = "";
	public:
	CD(string singers2, int stockID2, int quantity2, double price2, string name2, string description2, string tag2, int minimumAge2):
		Database(stockID2, quantity2, price2, name2, description2, tag2, minimumAge2){
		singers = singers2;
	}
};

class DVD : public Database{
	private:
	string titles = "";
	public:
	DVD(string titles2, int stockID2, int quantity2, double price2, string name2, string description2, string tag2, int minimumAge2):
		Database(stockID2, quantity2, price2, name2, description2, tag2, minimumAge2){
		titles = titles2;
	}
};


int main(){
	
	//ofstream output("Database.txt");
	ofstream myOutput; //Make containers.
	ifstream myInput;
	vector<string> sections;
	vector<string> index;
	string dataStream = ""; 
	string localDatabase = "Database.txt";
	string localUserbase = "Users.txt";
	string localAdminbase = "Admins.txt";
	string localSales = "Sales.txt";
	string originAdmin = "900000 0 admin Flow4U admin@foradmin.com 666 true";
	string authorizePass = "";
	string authorizeID = "";	
	int stockID = 0;
	int userID = 0;
	int adminID = 0;
	int runTime = 0;
	bool myGate1 = true;
	bool myGate2 = false;
	bool adminMode = false;
	
	if(not(filesystem::exists(localDatabase))){ //These guys make my default databases.
		myOutput.open (localDatabase, ios::app);
		LOG("Creating a database.");
		myOutput << "0 0 0 Test Base@test@file. test"; // Makes a new database.
		myOutput.close();
	}else{LOG("Database exists!");}
	
	if(not(filesystem::exists(localSales))){
		myOutput.open (localSales, ios::app);
		LOG("Creating a sales report.");
		myOutput << "This is a sales report showing all purchases:"; // Makes a new database.
		myOutput.close();
	}else{LOG("Report exists!");}
	
	if(not(filesystem::exists(localUserbase))){
		myOutput.open (localUserbase, ios::app);
		LOG("Creating a user database.");
		myOutput << "0 admin Flow4U admin@foradmin.com 666 true"; // Makes a new userbase. I know this is insecure. But this program could be adapted to work and encrypt everything. While only the inside of the program has access key.
		myOutput.close();
	}else{LOG("Userbase exists!");}
	
	if(not(filesystem::exists(localAdminbase))){
		myOutput.open (localAdminbase, ios::app);
		LOG("Creating an admin database.");
		myOutput << originAdmin; // Makes a new adminbase. I know this is insecure. But this program could be adapted to work and encrypt everything. While only the inside of the program has access key.
		myOutput.close();
	}else{LOG("Adminbase exists!");}
	
	while(myGate1){ //GUI
		bool test = false;
		LOG("");
		LOG("//////////////////////////////////////");
		LOG("Welcome to the Stock Manager!");
		LOG("Please log in!");
		LOG("ID: ");
		cin >> authorizeID;
		LOG("Password: ");
		cin >> authorizePass;
		
		
		
		myInput.open (localAdminbase);
		while(getline(myInput, dataStream , '\n')){
			split(dataStream, sections, ' ');
			if(sections[0] == authorizeID){
				if(sections[3] == authorizePass){test = true; adminMode = true;}
			}
			sections.clear();
		}
		myInput.close();
		
		
		
		myInput.open (localUserbase);
		while(getline(myInput, dataStream , '\n')){
			split(dataStream, sections, ' ');
			if(sections[0] == authorizeID){
				if(sections[2] == authorizePass){test = true;}
			}
			sections.clear();
		}
		myInput.close();
		
		
	 	if(test == false){
			LOG("Sorry, ID or password is incorrect. Please try again.");
		}else{LOG("Sucess."); myGate1 = false; myGate2 = true;};
		
	}	

	while(myGate2){
		int userChoice = 0;
		LOG("");
		LOG("//////////////////////////////////////");
		LOG("Select your option by typing in the number and pressing ENTER.");
		LOG("1. Sell Stock");
		LOG("2. Add Stock");
		LOG("3. Add Item");
		LOG("4. Correct Stock");
		LOG("5. Sales Report");
		if(adminMode == true){
			LOG("6. Register User");
			LOG("7. Remove User");
		}
		LOG("8. Exit");
		
		LOG(adminMode);
		
		cin >> userChoice;
		
		//Database testData = Database(1, 1, 5.0, "test", "test", "tag2", 5);
		//Database(int stockID2, int quantity2, double price2, string name2, string description2, string tag2, int minimumAge2)
		
		if(userChoice < 9 && userChoice > 0){
			if(userChoice == 1){
				
			}else if(userChoice == 2){
				
			}else if(userChoice == 3){
				
			}else if(userChoice == 4){
				
			}else if(userChoice == 5){
				
			}else if(userChoice == 6){
				if(adminMode == true){
					
				}else{LOG("Access Denied. Please try a command available to you.");}
			}else if(userChoice == 7){
				if(adminMode == true){
					
				}else{LOG("Access Denied. Please try a command available to you.");}
			}else if(userChoice == 8){
				myGate2 = false;
				adminMode = false;
			}
		}else{LOG("Please select a number choice from the shown numbers!");}
		


	}		
	
	
	myInput.open (localDatabase); // Input Stream
	myOutput.open (localDatabase, ios::app); // Output Stream
	
	while(getline(myInput, dataStream , '\n')){
		runTime ++; // Keeps track of the actual database size.
		split(dataStream, sections, ' ');
		if(atoi(sections[0].c_str()) > stockID){ stockID = atoi(sections[0].c_str()); } //Gets highest ID it finds.
		index.push_back(dataStream);
		
		sections.clear();
		
	}
	
	// Experimental code ----
	
	//for(int i = 0 ; i < sections.size() ; i++){
	//		LOG(sections[i]);
	//	}
	
	
	//myOutput << "0 5 3.50 John@Lennon@Album Just@a@cool@collection. cd" << endl; 
	
	
	
	myInput.close();
	myOutput.close();
	
	return 0;
}