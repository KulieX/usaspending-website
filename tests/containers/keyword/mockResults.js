export const mockSummary = {
    results: {
        prime_awards_count: 111111,
        prime_awards_obligation_amount: 222222.22
    }
};

export const mockApi = {
    limit: 10,
    results: [
        {
            internal_id: 1,
            'Award ID': 'ABC123',
            'Recipient Name': 'Blerg',
            'Action Date': '2011-12-31',
            'Transaction Amount': '123.45',
            'Awarding Agency': 'Department of Sandwiches',
            'Awarding Sub Agency': 'Office of Subs',
            'Award Type': 'Definitive Contract',
            Mod: '2'
        }
    ],
    page_metadata: {
        page: 1,
        count: 1,
        next: null,
        previous: null,
        hasNext: true,
        hasPrevious: false
    }
};

export const mockTabCount = {
    results: {
        contracts: 200,
        grants: 74,
        direct_payments: 28,
        loans: 621,
        other: 17
    }
};

export const mockTableProps = {
    keyword: '',
    fetchSummary: jest.fn()
};

export const mockRedux = {
    params: {
        keyword: ''
    },
    bulkDownload: {
        download: {
            expectedFile: '',
            expectedUrl: '',
            pendingDownload: false,
            showCollapsedProgress: false
        }
    }
};

export const mockActions = {
    setDownloadExpectedFile: jest.fn(),
    setDownloadPending: jest.fn(),
    setDownloadExpectedUrl: jest.fn()
};
