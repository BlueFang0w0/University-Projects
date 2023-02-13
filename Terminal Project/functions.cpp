//Aleksandrs Lukjanovs - M00674847 - 2020-21 CST2555 Operating Systems and Computer Networks
//CompLab1/01 Tutor Name: Ahmed Eissa
//myshell , functions, makefile

void CB_Request(vector<string>& Output , string& User_Input_Ref, string& whereI){ // Catch & Breakdown request.
	string user_input;
	int Char_Count = 0;
	int Space_Count = 0;
	string Character_Mixer;
	vector<char> Characters;
	
	cout << whereI << ":"; // Get user input.
	getline(cin , user_input);
	User_Input_Ref = user_input;
	user_input += " "; // Adds a space at the end which allows for the final cycle.
	for(char& Char : user_input){
		if(Char != ' '){
			Characters.push_back(Char);
		}else{
		    Character_Mixer = {Characters.begin(), Characters.end()};
			Output.push_back(Character_Mixer);
			Characters.clear();
			Space_Count ++;
		}
		Char_Count ++;
	}
	for(char& Char2 : Characters){LOG(Char2);};
}

string TTT_Request(string Mode ,string Input){ // This function eather adds or removes a level of directory, it uses similar principle to the function above.
	string Dir = Input;
	string f_Dir;
	vector<char> Characters; // Stores characters that are not '/';
	vector<string> Sections;
	string Character_Mixer;
	
	Dir += "/";
	
	for(char& Char : Dir){
		if(Char != '/'){
			Characters.push_back(Char);
		}else{
		    Character_Mixer = {Characters.begin(), Characters.end()};
			Sections.push_back(Character_Mixer);
			Characters.clear();
		}
	}
	
	if(Mode == "..."){  // Eather removes a layer or adds one.
		Sections.pop_back();
	}else{
		Sections.push_back(Mode);
	}
	
	for (unsigned i = 0 ; i < Sections.size() ; i++){
		f_Dir += Sections[i] + "/" ;
	}
	
	return f_Dir;
}