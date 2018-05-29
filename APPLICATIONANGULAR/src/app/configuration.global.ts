import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationGlobal {
  public static config = {
    searchEnabled: false,
    headerEnabled: true,
    orderEnabled: false,
    globalSearchEnabled: false,
    paginationEnabled: true,
    exportEnabled: false,
    clickEvent: true,
    selectRow: true,
    selectCol: false,
    selectCell: false,
    rows: 5,
    additionalActions: false,
    serverPagination: true,
    isLoading: false,
    detailsTemplate: false,
    groupRows: false,
    paginationRangeEnabled: false,
    collapseAllRows: false,
    checkboxes: false
  };
}
