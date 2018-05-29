using System;
using System.Collections.Generic;
using System.Linq;

namespace APPLICATION2
{
    public class Program
    {
        static void Main(string[] args)
        {
            int[] Result;

            Console.WriteLine("The numbers are: ");

            Result = SumCluteredNumbers(new int[] { 1, 2, 2, 5, 7, 3, 7, 8, 9, 26, 16, 1, 2, 3, 1, 4, 5, 1 });

            Console.WriteLine("[{0}]", string.Join(", ", Result));

            Result = SumCluteredNumbers(new int[] { 3, 7, 9, 5, 3, 56, 8, 0, 2, 56, 7, 6, 4 });

            Console.WriteLine("[{0}]", string.Join(", ", Result));

            Result = SumCluteredNumbers(new int[] { 3, 7, 9, 3, 7, 9, 3, 7, 9, 3, 7, 9, 3, 7, 9 });

            Console.WriteLine("[{0}]", string.Join(", ", Result));

            Result = SumCluteredNumbers(new int[] { 3, 7, 9, 5, 3, 4 });

            Console.WriteLine("[{0}]", string.Join(", ", Result));

            Console.Read();
        }

        public static int[] SumCluteredNumbers(int[] Numbers)
        {
            //Temporary Variable
            List<int> Controller = new List<int>();

            //Counter to help split the array
            int counter = 0;
            int[] Temporary = new int[] { };

            foreach (int Number in Numbers)
            {
                //Resize the array
                System.Array.Resize(ref Temporary, Temporary.Length + 1);
                Temporary[Temporary.Length - 1] = Number;

                //Number assigned to Temporary
                counter++;

                //Only when the counter is divided by 3
                if (counter % 3 == 0)
                {
                    //Sum
                    int Sum = Temporary.Sum();

                    if (!Controller.Contains(Sum))
                        Controller.Add(Sum);

                    Temporary = new int[] { };
                }
            }

            //Reverse the Array to show the Result
            Controller.Sort(new Comparison<int>( (i1, i2) => i2.CompareTo(i1) ));

            //Take only the firsts 3 itens.
            return Controller.Take(3).ToArray();
        }
    }
}
