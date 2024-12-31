#include <bits/stdc++.h>

using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        int a[n];
        for (int i = 0; i < n; i++)
        {
            cin >> a[i];
        }
        // sort(a, a + n);
        bool flag = false;
        // for (int i = 0; i < n; i++)
        // {
        //     cout << a[i] << " ";
        // }
        // cout << endl;
        for (int i = 0; i < n - 1; i++)
        {
            // if (a[i] + a[i] == a[i + 1])
            // {
            //     cout << a[i] << " " << a[i + 1] << endl;
            //     flag = false;
            //     break;
            // }
            int mx = max(a[i], a[i + 1]);
            int mn = min(a[i], a[i + 1]);
            if (mn + mn > mx)
            {
                flag = true;
                break;
            }
        }
        if (flag)
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