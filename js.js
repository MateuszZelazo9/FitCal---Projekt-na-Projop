// html 1 kod
        document.getElementById("a").style.visibility= "hidden" ; // Sprawia że styl bloku o ID "a" na początku działania dokumentu jest ukryty.
        document.getElementById("b").style.visibility= "hidden" ; // Sprawia że styl bloku o ID "b" na początku działania dokumentu jest ukryty.
        document.getElementById("c").style.visibility= "hidden" ; // Sprawia że styl bloku o ID "c" na początku działania dokumentu jest ukryty.
        // Poniżej znajduje się funkcja, która wykonuje się po wpisaniu wzrostu.
        function wyslaniewzrostu(){
            document.getElementById("a").style.visibility="visible"; // Sprawia że blok o ID "a" staje się zielony (styl wcześniej ukryty się pokazuje)
        }
        // Poniżej znajduje się funkcja, która wykonuje się po wpisaniu wagi.
        function wyslaniewagi(){
            document.getElementById("b").style.visibility="visible";  // Sprawia że blok o ID "b" staje się zielony (styl wcześniej ukryty się pokazuje)
        }
        // Poniżej znajduje się funkcja, która wykonuje się po wysłaniu informacji.
        function NORMALNAFUNKCJA(){
            
            var height = parseFloat(document.getElementById("bomba2").value); // Zmienna która przyjmuje wartość odpowiadającą za wzrost wpisaną w formularzu.
            var weight = parseFloat(document.getElementById("bomba1").value); // Zmienna która przyjmuje wagę odpowiadającą za wzrost wpisaną w formularzu.    
                    
            var bmi = weight / (height * height).toFixed(1); // Zmienna przyjmująca obliczoną skalę BMI.
            console.log(bmi);
            // INSTRUKCJA WARUNKOWA
            if(bmi<100){ // Jeśli BMI jest mniejsze niż 100:
                document.getElementById("tymon").innerHTML=bmi.toFixed(1); // Zamienia tekst "Najpierw prześlij dane : )" na twoją skalę Bmi.
                document.getElementById("c").style.visibility="visible"; // Sprawia że blok o ID "c" staje się zielony (styl wcześniej ukryty się pokazuje) 
            }
            else if (height <= 0 || weight <= 0) {
                document.getElementById("tymon").innerHTML = "Wprowadź poprawne (dodatnie) dane!";
                return;
            }
            else{
                document.getElementById("tymon").innerHTML="ta waga jest delikatnie zbyt duża chłopcze"; // Wyświetla inny tekst, jeśli BMI jest zbyt nienaturalnie wysokie.
            }
        }