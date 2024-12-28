#include <bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin >> t; // Number of test cases

    while (t--)
    {
        int n;
        cin >> n; // Length of the array
        vector<int> a(n);

        for (int i = 0; i < n; i++)
        {
            cin >> a[i];
        }

        // Sort the array to simplify stability checks
        sort(a.begin(), a.end());

        // Check if the largest triplet can form a triangle
        if (n >= 3 && a[n - 3] + a[n - 2] > a[n - 1])
        {
            cout << "YES" << endl;
        }
        else
        {
            cout << "NO" << endl;
        }
    }

    return 0;
}
