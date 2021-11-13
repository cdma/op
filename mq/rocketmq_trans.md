DefaultMQProducerImpl#sendMessageInTransaction {
	this.endTransaction(sendResult, localTransactionState, localException);
}

DefaultMQProducerImpl#endTransaction {
	this.mQClientFactory.getMQClientAPIImpl().endTransactionOneway(brokerAddr, requestHeader, remark,
            this.defaultMQProducer.getSendMsgTimeout());
}


MQClientAPIImpl#endTransactionOneway {
	 RemotingCommand request = RemotingCommand.createRequestCommand(RequestCode.END_TRANSACTION, requestHeader);
        request.setRemark(remark);
        this.remotingClient.invokeOneway(addr, request, timeoutMillis);
}


EndTransactionProcessor#processRequest {
	
}
