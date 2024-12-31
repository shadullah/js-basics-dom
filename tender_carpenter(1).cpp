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
        vector<int> v(n);
        for (int i = 0; i < n; i++)
        {
            cin >> v[i];
        }
        bool f = 0;
        for (int i = 0; i < n - 1; i++)
        {
            int mx = max(v[i], v[i + 1]);
            int mn = min(v[i], v[i + 1]);
            cout << mx << " " << mn << " " << endl;

            if (2 * mn > mx)
            {
                f = 1;
                break;
            }
        }
        if (f == 0)
            cout << "NO" << endl;
        else
            cout << "YES" << endl;
    }
    return 0;
}