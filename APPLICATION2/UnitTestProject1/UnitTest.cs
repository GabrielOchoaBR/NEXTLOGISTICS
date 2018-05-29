using APPLICATION2;
using Microsoft.VisualStudio.TestTools.UnitTesting;


namespace UnitTestProject
{
    [TestClass]
    public class UnitTest
    {
        [TestMethod]
        public void Verify_Correct_Answers()
        {
            int[] Result;

            Result = Program.SumCluteredNumbers(new int[] { 1, 2, 2, 5, 7, 3, 7, 8, 9, 26, 16, 1, 2, 3, 1, 4, 5, 1 });

            Assert.AreEqual("43, 24, 15", string.Join(", ", Result));

            Result = Program.SumCluteredNumbers(new int[] { 3, 7, 9, 5, 3, 56, 8, 0, 2, 56, 7, 6, 4 });

            Assert.AreEqual("69, 64, 19", string.Join(", ", Result));

            Result = Program.SumCluteredNumbers(new int[] { 3, 7, 9, 3, 7, 9, 3, 7, 9, 3, 7, 9, 3, 7, 9 });

            Assert.AreEqual("19", string.Join(", ", Result));

            Result = Program.SumCluteredNumbers(new int[] { 3, 7, 9, 5, 3, 4 });

            Assert.AreEqual("19, 12", string.Join(", ", Result));
        }
    }
}
