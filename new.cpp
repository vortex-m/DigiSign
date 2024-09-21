#include <iostream>
using namespace std;

// Normal
void binarySearch(int arr[], int n, int x)
{
   int low = 0, high = n - 1;
   while (low <= high)
   {
      int mid = (low + high) / 2;
      if (arr[mid] == x)
      {
         cout << "Index: " << mid;
         return;
      } 
      else if (arr[mid] < x)
      {
         low = mid + 1;
      }
      else
      {
         high = mid - 1;
      }
   }
}

int main()
{
   int arr[] = {0, 1, 2, 3, 4, 5};
   int n = sizeof(arr) / sizeof(arr[0]);
   cout << "Size: " << n << endl;
   int x = 5;
   binarySearch(arr, n, x);
   return 0;
}


// Recurssion
#include <iostream>
using namespace std;

int binarySearch(int arr[], int low, int high, int x) {
    if (low > high) {
        return -1;
    }
    int mid = (low + high) / 2;
    if (arr[mid] == x) {
        return mid;
    } else if (arr[mid] < x) {
        return binarySearch(arr, mid + 1, high, x);
    } else {
        return binarySearch(arr, low, mid - 1, x);
    }
}

int main() {
    int arr[] = {0, 1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "Size: " << n << endl;
    int x = 5;
    int result = binarySearch(arr, 0, n - 1, x);
    if (result != -1) {
        cout << "Index: " << result << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}